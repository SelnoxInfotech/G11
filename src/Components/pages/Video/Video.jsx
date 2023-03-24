import React from 'react'

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

export default function Video() {


  const imagePerRow = 8
  const [next, setNext] = useState(imagePerRow);
  const [val, setVal] = useState([])
  const [setHandleAudio] = useState(false)
  useEffect(() => {
    const getApi = async () => {
      const response = await fetch("https://www.g11fantasy.com/NewsSection/Get-VideoNews/")
      const data = await response.json();
      setVal(data.data.reverse())
    }
    getApi()

  }, [])
  const handleVideo = () => {
    setHandleAudio(true)
  }
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  const handlelessImage = () => {
    setNext(next - imagePerRow);
  };

  return (
    <div className='container-fluid'>
  <Helmet>
        <title>Video News |  G11 Fantasy Cricket Prediction |</title>
        <meta name="keywords" content="fantasy cricket prediction"
        />
        <meta name='description' content="Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."></meta>
      </Helmet>
      <div className="row">
        {val?.slice(0, next)?.map((ele) => {
          return (
            <div className='col-md-3' key={ele.id}>
              <div className='video' style={{ margin: "20px" }}>
         <div className='react_player'> 
         <ReactPlayer url={ele.VideoUrl} width="100%" height="100%" onClick={handleVideo} />
          </div>
                <div>
                  <div className="col latest_video_title">
                    <Link className="hedding hovereffect text" to={`${ele.id}/${ele.Title.replace(/\s+/g, '-').slice(0, -1)}`}><p>{ele.Title.substr(0, 100)}</p></Link>
                    <span className="Latest_video_date">
                      <span className="ClenderIcon"> <CiCalendarDate></CiCalendarDate></span>
                      {ele.created.slice(0, 10)}
                    </span>

                  </div>
                </div>
              </div>

            </div>
          )
        })}
        <div className='row'>
          <div className='col-12 center '>
            {next < val?.length && (
              <button className="btn readleft" onClick={handleMoreImage}
              >
                Load more
              </button>
            )}
            {next < val?.length && (
              <button className={next <= 3 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
              >
                Read Less
              </button>
            )}
          </div>

        </div>

      </div>



    </div>
  )
}

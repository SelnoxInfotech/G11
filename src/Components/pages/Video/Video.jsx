import React from 'react'

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube'
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
        <link rel="canonical" href="https://g11prediction.com/latest-video" ></link>
        <meta name="keywords" content="Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match"
        />
        <meta name='description' content="Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."></meta>
      </Helmet>
      <div className="row">
        <div className='col-12 center mt-2 breaking_news_hed'>
          <h1>Latest Video News - G11 Fantasy Cricket Prediction</h1>
        </div>
        {val?.slice(0, next)?.map((ele) => {
          return (
            <div className='col-md-3' key={ele.id}>
              <div className='video' style={{ margin: "20px" }}>
                <div className='react_player iframeContainer'>
                  <ReactPlayer   controls={false} url={ele.VideoUrl} width="100%" height="100%" onClick={handleVideo} />
            
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

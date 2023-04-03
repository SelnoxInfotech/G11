import React , { useState } from "react";
import ReactPlayer from 'react-player'
import { CiCalendarDate } from 'react-icons/ci';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {  useParams } from "react-router-dom";
import parse from 'html-react-parser';
import axios from "axios"
import RelativeVideo from "./RelativeVideo";
 import _ from "lodash";
const Latest_videoPlay = () => {
    const  id  = useParams();
    const [player, SetPlayer] = useState([])
    const [setHandleAudio] = useState(false)
    const handleVideo = () => {
        setHandleAudio(true)
    }
    React.useEffect(() => {

        axios("https://www.g11fantasy.com/NewsSection/Get-VideoNews/", {
            method: 'GET',
        }).then(response => {
            const LatestVideo = response?.data.data
            const select_video_by_user = _.find(LatestVideo, LatestVideo => LatestVideo.id === parseInt(id.id))
            SetPlayer([select_video_by_user ])
            window.scrollTo({top: 0, behavior: 'smooth' });
        })
    },[id])
    return (
        <>
            <div className="container-fluid ">
                <div className="row centerVideoPlayer">
                    <div className="col-md-6">
                        {player?.map((ele, index) => {
                            return (
                                <div className=" latestVideoPlaylist" key={index}>
                                    <ReactPlayer url={ele?.VideoUrl} width="100%" height="500px" onClick={handleVideo}/>
                                    <h5>{ele.Title.substr(0, 100)}</h5>
                                    <span className="latestVideoPlaylist_videoDate " >
                                        <span className="latestVideoPlaylist_ClenderIcon"> <CiCalendarDate></CiCalendarDate></span>
                                        {ele.created.slice(0, 10)}
                                    </span>
                                  

                                   <span>
                                        {parse(`${ele.Description}`)}
                                    </span>

                                   
                                </div>
                            )
                        })}

                    </div>

                    <div className="col-md-4">
                        <RelativeVideo></RelativeVideo>
                        
                    </div>

                </div>

            </div>
        </>
    )
}
export default Latest_videoPlay
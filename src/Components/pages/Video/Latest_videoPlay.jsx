import React, { useState } from "react";
import ReactPlayer from 'react-player/youtube'
import { CiCalendarDate } from 'react-icons/ci';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import axios from "axios"
import RelativeVideo from "./RelativeVideo";
import _ from "lodash";
import { Helmet } from 'react-helmet'
const Latest_videoPlay = () => {
    const id = useParams();
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
            SetPlayer([select_video_by_user])
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }, [id.id])
    return (
        <>
            <div className="container-fluid ">
                {
                    player?.map((data, index) => {
                        return (
                            <Helmet key={index}>
                                <title>{data.Meta_title}</title>
                                <link rel="canonical" href="https://g11prediction.com/latest-video/:id/:Title" ></link>
                                <meta name="keywords" content="Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match"
                                />
                                <meta name='description' content="Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."></meta>
                                {/* Facebook tags */}
                                <meta property="og:type" content={"Cricket"} />
                                <meta property="og:title" content={data.Meta_title} />
                                <meta property="og:description" content={"Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips. "} />
                                { /* End Facebook tags */}
                                { /* Twitter tags */}
                                <meta name="twitter:creator" content={"Cricket"} />
                                <meta name="twitter:card" content={data.Meta_title} />
                                <meta name="twitter:title" content={data.Meta_title} />
                                <meta name="twitter:description" content={"Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips. "} />




                            </Helmet>
                        )
                    })
                }
                <div className="row centerVideoPlayer">
                    <div className="col-md-6">
                        {player?.map((ele) => {
                            return (
                                <div key={ele.id} className=" latestVideoPlaylist" >
                                    <ReactPlayer url={ele?.VideoUrl} width="100%" height="500px" onClick={handleVideo} />
                                    <h2 className="breaking_news_hed" style={{ fontSize: "27px" }}>{ele.Title.substr(0, 100)}</h2>
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
                        {/* <RelativeVideo></RelativeVideo> */}

                    </div>

                </div>

            </div>
        </>
    )
}
export default Latest_videoPlay
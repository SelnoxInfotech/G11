import { useState, useEffect } from "react";
import ReactPlayer from 'react-player/youtube'
import { CiCalendarDate } from 'react-icons/ci';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";


import axios from "axios"

export default function RelativeVideo() {

    const [val, setVal] = useState([])

    const [setHandleAudio] = useState(false)
    const handleVideo = () => {
        setHandleAudio(true)
    }
    useEffect(() => {

        axios("https://www.g11fantasy.com/NewsSection/Get-VideoNews/", {
            method: 'GET',
        }).then(response => {

            setVal(response.data.data.reverse())
        })
    },[])


    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,


        verticalSwiping: true,
        swipeToSlide: true,




    };


    return (
        <div>
            <div className="latestVideoPlaylistHead d-flex justify-content-center">
                <p>Latest Videos</p>
            </div>
            <Slider {...settings}>

                {val.map((ele, index) => {
                    return (
                        <div className="recent_video_playlist " key={ele.id}>
                            <ReactPlayer className="recent_reactPlayer" url={ele?.VideoUrl} width="100%" height="300px" onClick={handleVideo} />
                            <div className="Recent_latest_video_title">
                                <Link to={`/Latest-Video/${ele.id}/${ele.Title.replace(/\s+/g, '-').slice(0, -1)}`}>{ele.Title.substr(0, 100)}</Link>
                                <span className="recent_video_playlistDate">
                                    <span className="Latest_video_ClenderIcon"> <CiCalendarDate></CiCalendarDate></span>
                                    {ele.created.slice(0, 10)}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

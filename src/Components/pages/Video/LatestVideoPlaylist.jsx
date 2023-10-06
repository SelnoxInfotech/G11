import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player/youtube'
import { CiCalendarDate } from 'react-icons/ci';

const LatestVideo = () => {

    const [val, setVal] = useState([])
    const [setHandleAudio] = useState(false)
    const handleVideo = () => {
        setHandleAudio(true)
    }


    useEffect(() => {
        const callApi = async () => {
            const res = await fetch("https://www.g11fantasy.com/NewsSection/Get-VideoNews/");
            const data = await res.json();
            setVal(data.data)
        }
        callApi()
    }, [])

    var settings = {
        arrows: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                    pauseOnHover: true,
                }
            },

            {
                breakpoint: 1178,
                settings: {
                    arrows: true,
                    pauseOnHover: true,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    pauseOnHover: true,
                    autoplay: true,
                    slidesToShow: 2 ,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    pauseOnHover: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    pauseOnHover: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 280,
                settings: {
                    arrows: true,
                    pauseOnHover: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                    , infinite: true,
                }
            }
        ]

    };

    return (
        <>
            <div className="container-fluid border  mt-4">
                <div className="row latest_video_container m-1">
                    <div className="col-md-12 LatestVideo_All_link">
                   <h3>     <span className="hadd">Latest Video </span></h3>
                        <span className="position-absolute end-0"> <Link className=" LatestVideo_view_all" to="/Latest-Video">View All</Link></span>
                    </div>
                </div>



                <Slider {...settings}>
                    {val.map((ele, index) => {
                        return (

                            <div className="container latest_video_container_video1" key={index} >
                                <div className="row latest_video_container_video" >

                                    <div className="col latestVideoPlayer">
                                        <ReactPlayer  controls={false} url={ele.VideoUrl} onClick={handleVideo} className="react_player_home"/>
                                    </div>
                                    <div className="col latest_video_title">
                                        <Link to={`latest-video/${ele.id}/${ele.Title.replace(/\s+/g, '-').slice(0, -1)}`} className="hedding hovereffect text  "> <p>{ele.Title.substr(0, 100)}</p></Link>
                                        <span className="Latest_video_date" >
                                            <span className="Latest_video_ClenderIcon"> <CiCalendarDate></CiCalendarDate></span>
                                            {ele.created.slice(0, 10)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div>

        </>
    )
}
export default LatestVideo
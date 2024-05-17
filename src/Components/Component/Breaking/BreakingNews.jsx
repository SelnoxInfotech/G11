import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { CiCalendarDate } from 'react-icons/ci';
import Slider from "react-slick";
function Breaking() {
    const [breakingnews, setbreakingnews] = useState([])

    useEffect(() => { 
        axios("https://www.g11fantasy.com/NewsSection/Get-TopNews/1", {
            method: 'GET',
              
        }).then(response => {
            if (response.status === 200) {
                setbreakingnews(response.data)
              
            }
        })
    }, [])

    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
          if (str.includes("--")) {
            str = str.replaceAll("--", "-")
          } else if (str.includes("//")) {
            str = str.replaceAll("//", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("-/", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("/-", "/")
          } else {
            a++
          }
        }
    
        return str
      }


    var settings = {
        
        dots: true,
        lazyLoad: true,
        infinite: false,
        speed: 80,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: false,
        pauseOnHover: true,
        responsive: [
            {

                breakpoint: 1400,
                settings: {
                    arrows: false,
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {

                breakpoint: 1100,
                settings: {
                    arrows: false,
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {

                breakpoint: 1000,
                settings: {
                    arrows: false,
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div className="container-fluid ">
            <div className="latest_bottem">
                <div className="row border  ">
                    <div className="col-md-12 View_All_link">
                        <div>
                         <h3>   <span className="latest hadd"> Breaking</span> <span className="latest_n hadd">News</span></h3>
                            <span className="  position-absolute end-0 view_all"><Link to="/BreakingNews"> View All  </Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" Latest_news_back " >

                <div className="container-fluid">
                    <div className="row ">
                      
                          <Slider {...settings} >
                        {breakingnews?.map((data, index) => {
                            return (
                                <>
                                    <div className="col-12 colBreaking" key={index}   >
                                        <div className=" col hovereffec    ">
                                            <div >
                                                <img className=" " src={`https://www.g11fantasy.com${data.Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" style={{ width: "100%", height: "200px" }} />
                                            </div>
                                        </div>
                                    </div >
                                    <div className="col-12 ">

                                        <Link to={`/cricket-breaking-news/${modifystr(data.Title?.replace(/\s+/g, '-').toLowerCase())}/${data.id}`}  className="hedding hovereffect text  "> 
                                           <div className="col breacking_news_title">
                                           {data.Title.substr(0, 100)}
                                           </div>
                                            </Link>
                                    <div className="col ">
                                        <span className="  BreakingNews_date" >
                                            <span className="ClenderIcon"> <CiCalendarDate></CiCalendarDate></span>
                                            {data.created.slice(0, 10)}
                                        </span>

                                    </div>
                                    </div>


                                </>
                            )
                        })}
                    </Slider>
                
                      
                    </div>
                </div>


            </div >
        </div >
    )

}

export default Breaking;
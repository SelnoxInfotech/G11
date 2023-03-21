import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import NewsState from "../../context/NewsApi";

import { Link } from "react-router-dom";
import axios from "axios";


export default function UpdateMatch() {
    const data = useContext(NewsState);
    const [newMatch, setnewmatch] = useState([])

    useEffect(() => {
   
        axios(" https://grand11.in/g11/all_matches_api.php", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                // SetTeamlogo(response.data.result)
            }
        })
        // setnewmatch(data.matches)
    }, [data])


    var settings = {
        arrows: false,
        lazyLoad: true,
        dots: true,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    autoplay: false,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }

            },
            {
                breakpoint: 850,
                settings: {
                    autoplay: false,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }

            },

            {
                breakpoint: 750,
                settings: {
                    autoplay: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: false,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
           
        ]
    };
    return (
        <div className="container-fluid update_match " >


            <Slider {...settings} >



                {
                    newMatch.map((data, index) => {
                        return (

                            <div className="container-fluid updatematch " key={data.id}>
                                <Link to={`Cricket-prediction/${data.id}/${data.title.replace(/\s+/g, '-').slice(0, -1)}`} >

                                    <div className="row center grid_row">
                                        <div className="col-12 center color">
                                            {data.title}
                                        </div>
                                        <div className="col-12 center fonting">
                                            <p>{data.first_team} vs {data.second_team}</p>

                                        </div>
                                        <div className="col-12 center fonting">
                                            <span>{data.date}</span> |<span>{data.time}</span>
                                        </div>
                                        <div className="col-12 center">
                                            <img src={`https://grand11.in/g11/${data.first_team_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                            <span >VS</span>
                                            <img src={`https://grand11.in/g11/${data.second_team_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                        </div>
                                        <div className="col-12 center">

                                        </div>

                                        <div className="col-12 center location_match">
                                            <p className="city_location"><span className="location">match Location-</span>{data.city}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

            </Slider >

        </div >

    );
}

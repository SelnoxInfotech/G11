import React, { useState, useEffect, useContext } from 'react'
import matches from "../../context/NewsApi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function Banner() {

    const data = useContext(matches);
    const [match, set_latest_match] = useState([])


    useEffect(() => {
        const data1 = data.matches
        set_latest_match(data1)

    }, [data])

    var settings = {
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (

        <div className='Banner_img '>
            <div className='container center'>
                <div className='row '>
                    <div className='col-12'><h1>Fantasy Cricket Prediction Today's Match</h1></div>
                </div>
            </div>
            <div className='top'>
                <Slider {...settings}>
                    {
                        match.map((match, index) => {
                            return (
                                <div className='container banner_field hedd' key={index}>
                                 
                                        <div className='row '>

                                            <Link to={`Cricket-prediction/${match.id}/${match.title.replace(/\s+/g, '-')}`} >
                                            <div className='col-sm center'>
                                                <span style={{ color: "white" }}>{match.first_team}</span>
                                            </div>
                                            <div className='col-sm center'>
                                                <span style={{ color: "red" }}> Vs </span>
                                            </div>
                                            <div className='col-sm center'>
                                                <span style={{ color: "white" }}>{match.second_team}</span>
                                            </div>
                                                </Link>
                                        </div>
                                    
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>

    )
}

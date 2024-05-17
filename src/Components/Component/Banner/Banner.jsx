import React, { useState, useEffect, useContext } from 'react'
import matches from "../../context/NewsApi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Banner() {

    // const data = useContext(matches);
    const [match, set_latest_match] = useState([])


    React.useEffect(() => {
   
        axios("https://www.g11fantasy.com/NewsSection/Get-Top4tbl_matchApi/", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                set_latest_match( response.data.reverse())
            }
        })
        // setnewmatch(data.matches)
    },[])

    function modifystr(str) {

        str = str.replaceAll(/[^a-zA-Z0-9/ ]/g, "-");
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
    
        return str.toLowerCase()
      }

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
                            const matchesObject = {};
                            const l = match.match_discription?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
                            [l].forEach((match, index) => {
                              matchesObject[`Match_${index + 1}`] = match.replace(/&ndash;/g, '-');
                            });
                            return (
                                <div className='container banner_field hedd' key={index}>

                                    <div className='row '>

                                        <Link to={`/cricket-prediction/${modifystr(matchesObject?.Match_1?.split(/:|-/)[1]?.replace(/&nbsp;/g, ''))+"-dream11-prediction"}/${match.id}`} >
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

import React, {  useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";  

export default function UpdateMatch() {

    const [newMatch, setnewmatch] = useState([])
    React.useEffect(() => {
   
        axios("https://www.g11fantasy.com/NewsSection/Get-Top4tbl_matchApi/", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                setnewmatch( response.data.reverse())
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
        <div className="container-fluid update_match" >


            <Slider {...settings} >
                {
                    newMatch?.map((data, index) => {
                        const matchesObject = {};
                        const l = data.match_discription?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
                        [l].forEach((match, index) => {
                          matchesObject[`Match_${index + 1}`] = match.replace(/&ndash;/g, '-');
                        });
                        return (

                            <div className="container-fluid updatematch " key={index}>
                                <Link to={`cricket-prediction/${modifystr(matchesObject?.Match_1?.split(/:|-/)[1]?.replace(/&nbsp;/g, ''))}-dream11-prediction/${data.id}`} >

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
                                            <img src={`https://grand11.in/g11/${data?.team_one_img}`} width="50" height="50" alt="G11-Fantasy " />
                                            <span >VS</span>
                                            <img src={"https://grand11.in/g11/"+ data?.team_two_img} width="50" height="50" alt="G11-Fantasy " />
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

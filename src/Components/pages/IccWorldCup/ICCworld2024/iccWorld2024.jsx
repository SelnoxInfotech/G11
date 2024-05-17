import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Helmet from "react-helmet"
import { AiFillEye } from "react-icons/ai"
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
import Button from "react-bootstrap/Button";
export default function IccWorld({ h2, Api }) {
    const imagePerRow = 8
    const [next, setNext] = useState(imagePerRow);
    // const [match_new, set_matche_new] = useState([]);




    const [IplData, SetIplData] = useState([])
    useEffect(() => {
        axios("https://g11fantasy.com/NewsSection/FilterbySubCategory/8", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                SetIplData(response.data.data)


                window.scrollTo(0, 0);
            }
        })
    }, [Api])



    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    useEffect(() => {
        SetIplData(IplData)
    }, [IplData])
    function modifystr(str) {
        if (str !== null) {
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
        else{
            return str
        }
    }

    return (
        <div className='container-fluid center'>
            <Helmet>
                <title>ICC Men's T20 World Cup 2024 Latest News, Predictions, Analysis l G11prediction</title>
                <link rel="canonical" href="https://grand11.in/icc-cricket-world-cup-2024" ></link>
                <meta name="keywords" content=" ICC T20 World Cup 2024,T20 schedule 2024, T20 teams 2024, T20 venues 2024, Dream11 prediction, T20 match prediction, T20 match analysis, T20 Latest News, T20 Live Updates, T20 Highlights," />
                <meta name='description' content=" ICC Men's T20 World Cup 2024 Live Updates, Latest News, Match Predictions, ICC Men's T20 World Cup 2024 Match Schedule, Venue Details, Points Table, Match Analysis And Much More Only On G11prediction"></meta>
                                                {/* Facebook tags */}
                                                <meta property="og:type" content={"Cricket"} />
            <meta property="og:title" content={"ICC Cricket World Cup 2023 | Latest News, Report, Prediction, Analysis | "} />
            <meta property="og:description" content={"ICC Cricket World Cup 2023 Latest News, LIVE Updates, Match Prediction, Schedule, Venue Details, Points Table, Expert Analysis, & much more at G11 prediction."} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={"Cricket"} />
            <meta name="twitter:card" content={"ICC Cricket World Cup 2023 | Latest News, Report, Prediction, Analysis | "} />
            <meta name="twitter:title" content={"ICC Cricket World Cup 2023 | Latest News, Report, Prediction, Analysis | "} />
            <meta name="twitter:description" content={"ICC Cricket World Cup 2023 Latest News, LIVE Updates, Match Prediction, Schedule, Venue Details, Points Table, Expert Analysis, & much more at G11 prediction."} />
      
           
           
            </Helmet>
            <div className='row'>
                <div className='col-12  breaking_news_hed mb-2 '>
                    {
                        h2 ? <h2>icc cricket world cup 2024 </h2> : <h1>icc cricket world cup 2024 </h1>

                    }
                </div>

                {
                    IplData?.slice(0, next)?.map((breakingnews, index) => {
                        return (

                            <div className="  col-xs-12 col-sm-6 col-md-3 Breaking_news_gap" key={index}>
                                <div className="card1 card">
                                    <div className="video text-center">
                                    <div className='col ShareOption'>
                                            <RWebShare
                                                data={{
                                                    url: `https://g11prediction.com/icc-cricket-world-cup-2024/${breakingnews.id}/${breakingnews?.Title?.replace(/\s+/g, '-').replace(/\?/g, '').toLowerCase()}`
                                                }}
                                                onClick={() => console.log("shared successfully!")}
                                            >
                                                <Button className="ShareButton">
                                                    <BsFillShareFill color='#c2121c'></BsFillShareFill>
                                                </Button>
                                            </RWebShare>

                                        </div>
                                        <Link className="hedding hovereffect text" to={`/cricket-breaking-news/${modifystr(breakingnews?.Title?.toLowerCase())}/${breakingnews.id} `}>
                                            <img className=" News_image" src={`https://www.g11fantasy.com${breakingnews.Image}`} alt="news_image" />
                                            <div className='News_image_title'>
                                                <h2 className="card-text content col_card_heading">{breakingnews.Title.slice(0, 80)}</h2>
                                            </div>
                                        </Link>
                                        <div className="col-12 ViewCount">
                                            <div className="col-6 ViewCountEye">
                                                <AiFillEye></AiFillEye>  <span> {breakingnews?.ViewCount + 1} view</span>
                                            </div>
                                            <div className="col-6 ViewCountDate">
                                                <p >{breakingnews.created.slice(0, 10)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>






                        )
                    })

                }
                <div className='row'>
                    <div className='col-12 center ' id='Buttongap'>
                        {next < IplData?.length && (
                            <button className="btn readleft" onClick={handleMoreImage}
                            >
                                Load more
                            </button>
                        )}
                        {next < IplData?.length && (
                            <button className={next <= 5 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
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

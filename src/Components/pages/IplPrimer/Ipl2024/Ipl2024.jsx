import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Helmet from "react-helmet"
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
import { AiFillEye } from "react-icons/ai"
import Button from "react-bootstrap/Button";
export default function Ipl({ Api, h2 }) {
    const imagePerRow = 8
    const [next, setNext] = useState(imagePerRow);
    // const [match_new, set_matche_new] = useState([]);


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

    const [IplData, SetIplData] = useState([])
    useEffect(() => {
        axios("https://g11fantasy.com/NewsSection/FilterbySubCategory/7", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                SetIplData(response.data.data.reverse())


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
    return (
        <div className='container-fluid center'>
            <Helmet>
                <title>Get IPL 2024 Latest News, Predictions, Analysis  On G11predictions</title>
                <link rel="canonical" href="https://g11prediction.com/ipl_2024" ></link>
                <meta name="keywords" content="IPL 2024,IPL schedule 2024, IPL teams 2024, IPL venues 2024, Dream11 prediction, IPL 2024 match prediction, IPL 2024" />
                <meta name='description' content="PL 2024 Live Updates, Latest News, Match Predictions, IPL 2024 Match Schedule, Venue Details, Points Table, Match Analysis And Much More Only On G11prediction"></meta>
                {/* Facebook tags */}
                <meta property="og:type" content={"Cricket"} />
                <meta property="og:title" content={'IPL 2023-Latest News & Live Updates, Match Report & Analysis'} />
                <meta property="og:description" content={'IPL 2023: Latest News, LIVE Updates, Schedule, Venue Details, Series, Player Stats, Points Table, Expert Analysis, Videos & much more at g11prediction.com'} />
                { /* End Facebook tags */}
                { /* Twitter tags */}
                <meta name="twitter:creator" content={"Cricket"} />
                <meta name="twitter:card" content={'IPL 2023-Latest News & Live Updates, Match Report & Analysis'} />
                <meta name="twitter:title" content={'IPL 2023-Latest News & Live Updates, Match Report & Analysis'} />
                <meta name="twitter:description" content={'IPL 2023: Latest News, LIVE Updates, Schedule, Venue Details, Series, Player Stats, Points Table, Expert Analysis, Videos & much more at g11prediction.com'} />



            </Helmet>
            <div className='row'>
                <div className='col-12  breaking_news_hed mb-2 '>
                    {
                        h2 ? <h2>IPL 2024 - Latest News & Live Updates </h2> : <h1>IPL 2024 - Latest News & Live Updates </h1>

                    }
                </div>

                {
                    IplData?.slice(0, next)?.map((breakingnews, index) => {
                        console.log(breakingnews?.urlslug)
                        return (

                            <div className="  col-xs-12 col-sm-6 col-md-3 Breaking_news_gap" key={index}>
                                <div className="card1 card">
                                    <div className="video text-center">
                                        <div className='col ShareOption'>
                                            <RWebShare
                                                data={{
                                                    url: `https://g11prediction.com/${breakingnews.id}/${breakingnews?.urlslug?.replace(/\s+/g, '-').replace(/\?/g, '').toLowerCase()}`
                                                }}
                                                onClick={() => console.log("shared successfully!")}
                                            >
                                                <Button className="ShareButton">
                                                    <BsFillShareFill color='#c2121c'></BsFillShareFill>
                                                </Button>
                                            </RWebShare>

                                        </div>
                                        <Link className="hedding hovereffect text" to={`/ipl_2024/${modifystr(breakingnews?.urlslug)}/${breakingnews.id} `}>
                                            <img className=" News_image" src={`https://www.g11fantasy.com/${breakingnews.Image}`} alt="news_image" />
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

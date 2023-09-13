import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Helmet from "react-helmet"
export default function Ipl({ h2 }) {
    const imagePerRow = 8
    const [next, setNext] = useState(imagePerRow);
    // const [match_new, set_matche_new] = useState([]);




    const [IplData, SetIplData] = useState([])
    useEffect(() => {
        axios("https://g11fantasy.com/NewsSection/FilterbySubCategory/1", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                SetIplData(response.data.data.reverse())


                window.scrollTo(0, 0);
            }
        })
    }, [])



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
                <title>IPL 2023-Latest News & Live Updates, Match Report & Analysis</title>
                <meta  name="keywords" content="Indian Premier League 2023 cricket score, IPL 2023 schedule, Indian Premier League 2023 results, IPL latest news 2023, Indian Premier League, ipl, iplt20, indian premier league, ipl cricket, ipl match, ipl live, ipl live scorecard, Ipl videos, Ipl news, Ipl Players, Ipl Auction, Ipl points Table, Ipl teams, Ipl highlights, Ipl Player Injury, Best T20 cricket League, T20 league,Tata ipl, ipl 2023, ipl Players squad, Csk, MI, SRH, DC, RR, GT, LSG, RCB, KKR, PBKS, IPL cricket live, Chennai Super Kings, Delhi Capitals, Gujarat Titans, Kolkata Knight Riders, Lucknow Super Giants, Mumbai Indians, Punjab Kings, Rajasthan Royals, Royal Challengers Bangalore, Sunrisers Hyderabad" />
                <meta name='description' content="IPL 2023: Latest News, LIVE Updates, Schedule, Venue Details, Series, Player Stats, Points Table, Expert Analysis, Videos & much more at g11prediction.com"></meta>
            </Helmet>
            <div className='row'>
                <div className='col-12  breaking_news_hed mb-2 '>
                    {
                        h2 ? <h2>IPL 2023 - Latest News & Live Updates </h2> : <h1>IPL 2023 - Latest News & Live Updates </h1>

                    }
                </div>

                {
                    IplData?.slice(0, next)?.map((breakingnews, index) => {
                        return (

                            <div className="  col-xs-12 col-sm-6 col-md-3 Breaking_news_gap" key={index}>
                                <div className="card1 card">
                                    <div className="video text-center">
                                        <Link className="hedding hovereffect text" to={`/Ipl_2023/${breakingnews?.urlslug?.replace(/\s+/g, '-')}/${breakingnews.id} `}>
                                            <img className=" News_image" src={`https://www.g11fantasy.com/${breakingnews.Image}`} alt="news_image" />
                                            <div className='News_image_title'>
                                            <h2 className="card-text content col_card_heading">{breakingnews.Title.slice(0, 80)}</h2>
                                            </div>
                                        </Link>
                                        <p >{breakingnews.created.slice(0, 10)}</p>
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

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Helmet from "react-helmet"
import { AiFillEye } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import Button from "react-bootstrap/Button";
import { RWebShare } from "react-web-share";
export default function BreakingNewsList({ h2, Api }) {
    const imagePerRow = 8
    const [next, setNext] = useState(imagePerRow);
    const [match_new, set_matche_new] = useState([]);



    const [breakingnews, setbreakingnews] = useState([])
    // useEffect(() => {
    //     axios("https://www.g11fantasy.com/NewsSection/Get-News/", {
    //         method: 'GET',

    //     }).then(response => {
    //         if (response.status === 200) {
    //             setbreakingnews(response.data)


    //         }
    //     })

    // }, [Api])
    useEffect(() => {
        axios("https://www.g11fantasy.com/NewsSection/Get-TopNews/1", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                setbreakingnews(response.data)
                axios("https://www.g11fantasy.com/NewsSection/Get-News/1", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                setbreakingnews(response.data)


            }
        })
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
        set_matche_new(breakingnews)
    }, [breakingnews])

    return (
        <div className='container-fluid center'>
            <Helmet>
                <title>Breaking News |  G11 Fantasy Cricket Prediction |  </title>
                <link rel="canonical" href="https://g11prediction.com/breakingnews" ></link>
                <meta name="keywords" content="Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news," />
                <meta name="title" key="title" content="Breaking News |  G11 Fantasy Cricket Prediction |" />
                <meta name='description' content="Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."></meta>
                {/* Facebook tags */}
                <meta property="og:type" content={"website"} />
                <meta property="og:title" content={"Breaking News |  G11 Fantasy Cricket Prediction |"} />
                <meta property="og:description" content={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."} />
                { /* End Facebook tags */}
                { /* Twitter tags */}
                <meta name="twitter:creator" content={"Cricket"} />
                <meta name="twitter:card" content={"Breaking News |  G11 Fantasy Cricket Prediction |"} />
                <meta name="twitter:title" content={"Breaking News |  G11 Fantasy Cricket Prediction |"} />
                <meta name="twitter:description" content={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."} />

            </Helmet>
            <div className='row'>
                <div className='col-12  breaking_news_hed '>
                    {
                        h2 ? <h2> Cricket Breaking News ON TRENDING TOPICS</h2> : <h1> Cricket Breaking News ON TRENDING TOPICS</h1>
                    }
                </div>

                {
                    match_new?.slice(0, next)?.map((breakingnews, index) => {
                        return (

                            <div className="  col-xs-12 col-sm-6 col-md-3 Breaking_news_gap" key={index}>
                                <div className="card1 card">
                                    <div className="video text-center">

                                        <div className='col ShareOption'>
                                            <RWebShare
                                                data={{
                                                    url: `https://g11prediction.com/cricket-breakingnews/${breakingnews.id}/${breakingnews?.urlslug?.replace(/\s+/g, '-').replace(/\?/g, '').toLowerCase()}`
                                                }}
                                                onClick={() => console.log("shared successfully!")}
                                            >
                                                <Button className="ShareButton">
                                                    <BsFillShareFill color='#c2121c'></BsFillShareFill>
                                                </Button>
                                            </RWebShare>

                                        </div>
                                        <Link className="hedding hovereffect text" to={`/cricket-breakingnews/${breakingnews.id}/${breakingnews?.urlslug?.replace(/\s+/g, '-').toLowerCase()}`}>
                                            <img className=" News_image" src={`https://www.g11fantasy.com/${breakingnews.Image}`} alt="news_image" />
                                            <div className='News_image_title'>
                                                <h2 className="card-text content col_card_heading">{breakingnews.Title.slice(0, 80)}</h2>
                                            </div>
                                        </Link>
                                        <div className="col-12 ViewCount">
                                            <div className="col-6 ViewCountEye">
                                                <AiFillEye></AiFillEye>  <span>{breakingnews?.ViewCount} view</span>
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
                        {next < match_new?.length && (
                            <button className="btn readleft" onClick={handleMoreImage}
                            >
                                Load more
                            </button>
                        )}
                        {next < match_new?.length && (
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

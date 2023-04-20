import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Helmet from "react-helmet"
export default function BreakingNewsList() {
    const imagePerRow = 8
    const [next, setNext] = useState(imagePerRow);
    const [match_new, set_matche_new] = useState([]);
 



    const [breakingnews, setbreakingnews] = useState([])
    useEffect(() => {
        axios("https://www.g11fantasy.com/NewsSection/Get-News/", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                setbreakingnews(response.data.reverse())
        
                
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
        set_matche_new(breakingnews)
    }, [breakingnews])
    return (
        <div className='container-fluid center'>
            <Helmet>
                <title>Breaking News |  G11 Fantasy Cricket Prediction |  </title>
                <meta  name="keywords" content="Cricket Betting Tips & Predictions" />
                <meta name='description' content="Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."></meta>
            </Helmet>
            <div className='row'>
                <div className='col-12  breaking_news_hed '>
                    <h1> Cricket Breaking News ON TRENDING TOPICS</h1>
                </div>
             
                {
                    match_new?.slice(0, next)?.map((breakingnews, index) => {
                        return (
        
                            <div className="  col-xs-12 col-sm-6 col-md-3 Breaking_news_gap" key={index}>
                                <div className="card1 card">
                                    <div className="video text-center">
                                        <Link className="hedding hovereffect text" to={`/Cricket-BreakingNews/${breakingnews.id}/${breakingnews?.urlslug?.replace(/\s+/g, '-')}`}>
                                            <img className=" News_image" src={`https://www.g11fantasy.com/${breakingnews.Image}`} alt="news_image" />
                                            <div className='News_image_title'>
                                                <p className="card-text content col_card_heading">{breakingnews.Title.slice(0, 80)}</p>
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

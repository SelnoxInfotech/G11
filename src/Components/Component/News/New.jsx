import { React, useContext, useState, useEffect } from 'react'
import news from "../../context/NewsApi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function New() {
    const imagePerRow = 8
    const [match_new, set_matche_new] = useState([]);
    const [next, setNext] = useState(imagePerRow);
    const data1 = useContext(news);

    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    useEffect(() => {
        set_matche_new(data1.news)
    }, [data1])
    return (
        <section id="team" className="pb-5">
            <Helmet>
                <title>Latest Cricket News | G11 Fantasy Cricket Prediction </title>
                <link rel="canonical" href="https://grand11.in//news" ></link>
                <meta name="keywords" content="Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news, " />
                <meta name="description" key="description" content="Latest Cricket News on Trending topics. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips"></meta>
                {/* Facebook tags */}
                <meta property="og:type" content={"Cricket"} />
                <meta property="og:title" content={'Latest Cricket News | G11 Fantasy Cricket Prediction'} />
                <meta property="og:description" content={"Latest Cricket News on Trending topics. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips"} />
                { /* End Facebook tags */}
                { /* Twitter tags */}
                <meta name="twitter:creator" content={"Cricket"} />
                <meta name="twitter:card" content={'Latest Cricket News | G11 Fantasy Cricket Prediction'} />
                <meta name="twitter:title" content={'Latest Cricket News | G11 Fantasy Cricket Prediction'} />
                <meta name="twitter:description" content={"Latest Cricket News on Trending topics. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips"} />


            </Helmet>
            <div className="container-Fluid">
                <h1 className="section-title ">Latest Cricket News ON TRENDING TOPICS</h1>
                <div className="row" id="team_data" >
                    {
                        match_new?.slice(0, next)?.map((data, index) => {
                            return (


                                <div className="col-xs-12 col-sm-6 col-md-3 Breaking_news_gap" key={index}>
                                    <div className="card">
                                        <div className="video text-center">
                                            <Link className="hedding hovereffect text" to={`/cricket-breakingnews/${data.title.replace(/\s+/g, '-').toLowerCase()}/${data.id}`}>
                                                <img className=" News_image" src={`https://grand11.in/g11/${data.image}`} alt="news_image" />
                                                <div className='News_image_title'>
                                                    <h2 className="card-text content col_card_heading">{data.title.slice(0, 80)}</h2>
                                                </div>
                                            </Link>

                                            {/* <div className="col-12 ViewCount"> */}

                                            <div className="col-12 ViewCountDate">
                                                <span >{data.post_date}</span>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>


                            )
                        })
                    }
                </div>
                <div className='row'>
                    <div className='col-12 center '>
                        {next < match_new?.length && (
                            <button className="btn readleft" onClick={handleMoreImage}
                            >
                                Load more
                            </button>
                        )}
                        {next < match_new?.length && (
                            <button className={next <= 3 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
                            >
                                Read Less
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </section>

    )
}





























































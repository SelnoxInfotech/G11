import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Helmet from "react-helmet"
import { AiFillEye } from "react-icons/ai"
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
import Button from "react-bootstrap/Button";
export default function RulsRegulation({ h2, Api }) {
    const imagePerRow = 8
    const [next, setNext] = useState(imagePerRow);
    // const [match_new, set_matche_new] = useState([]);




    const [IplData, SetIplData] = useState([])
    useEffect(() => {
        axios("https://g11fantasy.com/NewsSection/FilterbyCategory/2", {
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
                <title>Cricket Rules And Regulations | Playing Conditions- G11 Prediction |</title>
                <link rel="canonical" href="https://g11prediction.com/cricket-rules-and-regulation" ></link>
                <meta name="keywords" content="Cricket Playing Conditions, Cricket Rules and Regulations, Cricket Laws, Cricket Playing Rules, ODI laws, T20 rules, Cricket match playing rules, cricket penalty conditions," />
                <meta name='description' content="Cricket Rules And Regulations, Playing Conditions by G11 Fantasy Cricket Prediction Website and Application for Today's Match. # 1 Fantasy Cricket Prediction tips."></meta>
                   {/* Facebook tags */}
        <meta property="og:type" content={"Cricket"} />
        <meta property="og:title" content={"Cricket Rules And Regulations | Playing Conditions- G11 Prediction |"} />
        <meta property="og:description" content={"Cricket Rules And Regulations, Playing Conditions by G11 Fantasy Cricket Prediction Website and Application for Today's Match. # 1 Fantasy Cricket Prediction tips."} />
        { /* End Facebook tags */}
        { /* Twitter tags */}
        <meta name="twitter:creator" content={"Cricket"} />
        <meta name="twitter:card" content={"Cricket Rules And Regulations | Playing Conditions- G11 Prediction |"} />
        <meta name="twitter:title" content={"Cricket Rules And Regulations | Playing Conditions- G11 Prediction |"} />
        <meta name="twitter:description" content={"Cricket Rules And Regulations, Playing Conditions by G11 Fantasy Cricket Prediction Website and Application for Today's Match. # 1 Fantasy Cricket Prediction tips."} />

            </Helmet>
            <div className='row'>
                <div className='col-12  breaking_news_hed mb-2 '>
                    {
                        h2 ? <h2>Cricket Rules And Regulations </h2> : <h1>Cricket Rules And Regulations </h1>

                    }
                </div>

                {
                    IplData?.slice(0, next)?.map((breakingnews, index) => {

                        return (

                            <div className="  col-xs-12 col-sm-6 col-md-3 Breaking_news_gap" key={index}>
                                <div className="card1 card">
                                    <div className="video text-center">
                                        < div className='col ShareOption'>
                                            <RWebShare
                                                data={{
                                                    url: `https://g11prediction.com/cricket-players/${breakingnews.id}/${breakingnews?.urlslug?.replace(/\s+/g, '-').replace(/\?/g, '').toLowerCase()}`
                                                }}
                                                onClick={() => console.log("shared successfully!")}
                                            >
                                                <Button className="ShareButton">
                                                    <BsFillShareFill color='#c2121c'></BsFillShareFill>
                                                </Button>
                                            </RWebShare>

                                        </div>
                                        <Link className="hedding hovereffect text" to={`/cricket-rules-and-regulation/${breakingnews?.urlslug?.replace(/\s+/g, '-').replace(/\?/g, '').toLowerCase()}/${breakingnews.id} `}>
                                            <img className=" News_image" src={`https://www.g11fantasy.com/${breakingnews?.Image}`} alt="news_image" />
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

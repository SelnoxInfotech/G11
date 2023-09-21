import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import BreakingNewsList from "./BreakingNewsList";
import Helmet from "react-helmet"
import { AiFillEye } from "react-icons/ai"

export default function Breaking(props) {
    const { id,Title } = useParams();
    const [breakingnews, setbreakingnews] = useState([])
    const [Api, SetApi] = useState(false)
    useEffect(() => {
        axios(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${id}`, {
            method: 'GET',

        }).then(response => {
            window.scrollTo(0, 0);
            if (response.status === 200) {
                setbreakingnews(response.data.data)

            }
        }).catch(()=>{
            axios(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${Title}`, {
            method: 'GET',

        }).then(response => {
            window.scrollTo(0, 0);
            if (response.status === 200) {
                setbreakingnews(response.data.data)

            }
        })
        })
    }, [id])
    useEffect(() => {
        axios.post(`https://www.g11fantasy.com/NewsSection/Update-ViewCounter/`,

            {
                "id": id

            }

        ).then(response => {
            SetApi((Api) => {
                return !Api
            })
        })
    }, [id])


    return (
        <div>
            {
                breakingnews?.map((data, index) => {
                    return (
                        <Helmet key={index}>
                            <title>{data.Meta_title}</title>
                            <link rel="canonical" href="https://g11prediction.com/cricket-breakingnews/:id/:Title" ></link>
                            <meta name="keywords" content="Cricket Betting Tips & Predictions" />
                            <meta name='description' content={data.Meta_Description}></meta>
                            {/* Facebook tags */}
                            <meta property="og:type" content={"website"} />
                            <meta property="og:title" content={data.Meta_title} />
                            <meta property="og:description" content={ data.Meta_Description} />
                            { /* End Facebook tags */}
                            { /* Twitter tags */}
                            <meta name="twitter:creator" content={"Cricket"} />
                            <meta name="twitter:card" content={data.Meta_title} />
                            <meta name="twitter:title" content={data.Meta_title} />
                            <meta name="twitter:description" content={ data.Meta_Description } />

                        </Helmet>



                    )
                })
            }
            {
                breakingnews?.map((data, index) => {
                    return (


                        <div className="container " key={index}>
                            <div className="row">
                                <div className="col-12"> <h1 className="title_had">{parse(data.Title)}</h1></div>
                                <div className="col-12 imag">
                                    <div className="col">
                                        <img src={`https://www.g11fantasy.com${data?.Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" style={{ maxWidth: "100%", height: "600px" }} />
                                    </div>
                                    <div className="col">

                                        {parse(data.Description)}
                                    </div>
                                    <div className="col-12 ViewCount">
                                        <div className="col-6 ViewCountEye">
                                            <AiFillEye></AiFillEye>  <span>{data?.ViewCount + 1} view</span>
                                        </div>
                                        <div className="col-6 ViewCountDate">
                                            <p >{data.created.slice(0, 10)}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })

            }
            <BreakingNewsList Api={Api} h2={true}></BreakingNewsList>
        </div>
    )
}

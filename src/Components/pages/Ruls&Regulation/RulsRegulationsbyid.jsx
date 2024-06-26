import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import Helmet from "react-helmet"
import RulsRegulation from "./RulsRegulation";
import { AiFillEye } from "react-icons/ai"
export default function RulsRegulationsbyid(props) {
    const { id } = useParams();
    const [Api, SetApi] = useState(false)
    const [SelcetIpl, SetSelcetIpl] = useState([])
    useEffect(() => {
        axios(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${id}`, {
            method: 'GET',

        }).then(response => {

            if (response.status === 200) {
                SetSelcetIpl(response.data.data)
            }

        })
        window.scrollTo(0, 0);
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
                SelcetIpl.map((data) => {
                    return (
                        <Helmet>
                            <title>{data.Meta_title}</title>
                            <link rel="canonical" href="https://grand11.in/cricket-rules-and-regulation/:Title/:id" ></link>
                            <meta name="keywords" content="Cricket Playing Conditions, Cricket Rules and Regulations, Cricket Laws, Cricket Playing Rules, ODI laws, T20 rules, Cricket match playing rules, cricket penalty conditions," />
                            <meta name='description' content={data.Meta_Description}></meta>
                            {/* Facebook tags */}
                            <meta property="og:type" content={"Cricket"} />
                            <meta property="og:title" content={data.Meta_title} />
                            <meta property="og:description" content={data.Meta_Description} />
                            { /* End Facebook tags */}
                            { /* Twitter tags */}
                            <meta name="twitter:creator" content={"Cricket"} />
                            <meta name="twitter:card" content={data.Meta_title} />
                            <meta name="twitter:title" content={data.Meta_title} />
                            <meta name="twitter:description" content={data.Meta_Description} />

                        </Helmet>
                    )
                })
            }
            {
                SelcetIpl?.map((data, index) => {
                    return (


                        <div className="container " key={index} >
                            <div className="row">
                                <div className="col-12"> <h1 className="title_had">{parse(data.Title)}</h1></div>
                                <div className="col-12 imag">
                                    <div className="col">
                                        <img src={`https://www.g11fantasy.com${data.Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" style={{ maxWidth: "100%", height: "600px" }} />

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
            <RulsRegulation Api={Api} h2={true}></RulsRegulation>
        </div>
    )
}

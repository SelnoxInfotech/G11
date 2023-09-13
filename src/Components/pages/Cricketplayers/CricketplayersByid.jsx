import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import Helmet from "react-helmet"
import Cricketplayers from "./Cricketplayers";
import { AiFillEye } from "react-icons/ai"
export default function CricketplayersByid(props) {
    const { id } = useParams();
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



    return (
        <div>
            {
                SelcetIpl.map((data) => {
                    return (
                        <Helmet>
                            <title>{data.Meta_title}</title>
                            <meta name="keywords" content="Cricketers, Cricket players, New t20 Rules,New ICC rules,India Cricket players, Player List, Test Cricket, Player Record, ODI Team, India cricketers, all cricket players profile, India cricketers profile, cricketers stats, Cricketers records, All cricket players, Cricket players details, " />
                            <meta name='description' content={data.Meta_Description}></meta>
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
            <Cricketplayers h2={true}></Cricketplayers>
        </div>
    )
}

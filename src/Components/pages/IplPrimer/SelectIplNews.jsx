import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import Ipl from "./Ipl";
import Helmet from "react-helmet"
export default function SelcectIpl(props) {
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
                            <meta name="keywords" content="IPL 2023-Latest News & Live Updates, Match Report & Analysis" />
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
                                </div>
                            </div>
                        </div>
                    )
                })

            }
            <Ipl h2={true}></Ipl>
        </div>
    )
}

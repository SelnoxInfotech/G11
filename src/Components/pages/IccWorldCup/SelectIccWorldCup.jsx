import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import Helmet from "react-helmet"
import IccWorld from "./IccWorldCup";
import { AiFillEye } from "react-icons/ai"
export default function SelcectIpl(props) {
    const { id } = useParams();
    const [SelcetIpl, SetSelcetIpl] = useState([])
    const [Api, SetApi] = useState(false)
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
            SetApi(!Api)
        })
    }, [id])



    return (
        <div>
            {
                SelcetIpl.map((data) => {
                    return (
                        <Helmet>
                            <title>{data.Meta_title}</title>
                            <meta name="keywords" content="G11 Fantasy Cricket Prediction,ICC CRICKET WORLD CUP 2023,Dream11 prediction,ICC Cricket World Cup 2023 Prediction,Latest News,ICC CRICKET WORLD CUP Match,ICC Cricket World Cup 2023 schedule,ICC Cricket World Cup 2023 results,ICC Cricket World Cup 2023 fixtures,ICC Cricket World Cup 2023 videos" />
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
                                            <AiFillEye></AiFillEye>  <span> {data?.ViewCount + 1} view</span>
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
            <IccWorld Api={Api} h2={true}></IccWorld>
        </div>
    )
}

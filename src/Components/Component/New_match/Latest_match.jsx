import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { Helmet } from "react-helmet";

export default function UpdateMatch() {

    const [newMatch, setnewmatch] = useState([])

    useEffect(() => {
        axios("https://grand11.in/g11/api/matches", {
            method: 'GET',

        }).then(response => {
            setnewmatch(response.data.result)

        })
    }, [])

    return (


        <section id="team" className="pb-5">
            <Helmet>


                <title>Today's Match | G11 | Fantasy Cricket Betting Prediction </title>
                <meta  name="keywords" content="Dream11 Prediction website" />
                <meta name='description' content="Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"></meta>
            </Helmet>
            <div className="container">
                <h1 className="section-title ">Today Match Predictions - Cricket Betting Tips from Experts (100% Free)</h1>
                <div className="row" id="team_data" >
                    {
                        newMatch.map((data, index) => {
                            return (
                                <div className="col-sm-4 bottom">

                                    <div className="container-fluid updatematch " key={index}>
                                        <Link to={`Cricket-prediction/${data.id}/${data.title.replace(/\s+/g, '-').slice(0, -1)}`} >

                                            <div className="row center grid_row">
                                                <div className="col-12 center color">
                                                    {data.title}
                                                </div>
                                                <div className="col-12 center fonting font" >
                                                    <p>{data.first_team} vs {data.second_team}</p>

                                                </div>
                                                <div className="col-12 center fonting">
                                                    <span>{data.date}</span> |<span>{data.time}</span>
                                                </div>
                                                <div className="col-12 center">
                                                    <img src={`https://grand11.in/g11/${data.first_team_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                                    <span className="vs" >VS</span>
                                                    <img src={`https://grand11.in/g11/${data.second_team_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                                </div>
                                                <div className="col-12 center">

                                                </div>

                                                <div className="col-12 center location_match">
                                                    <p className="city_location"><span className="location">match Location-</span>{data.city}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    );
}

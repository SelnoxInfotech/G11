import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
export default function UpdateMatch() {
    const imagePerRow = 6
    const [next, setNext] = useState(imagePerRow);
    const [newMatch, setnewmatch] = useState([])
    const location = useLocation()
    React.useEffect(() => {
        axios(" https://grand11.in/g11/all_matches_api.php", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {

                setnewmatch(response.data.reverse())
            }


        })
    }, [])
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    return (


        <section id="team" className="pb-5">
            <Helmet>


                <title>Today's Match | G11 | Fantasy Cricket Betting Prediction </title>
                <link rel="canonical" href="https://g11prediction.com/latest-match/cricket-prediction" ></link>
                <meta name="keywords" content="Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match" />
                <meta name='description' content="Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"></meta>
              {/* Facebook tags */}
        <meta property="og:type" content={"website"} />
        <meta property="og:title" content={"Today's Match | G11 | Fantasy Cricket Betting Prediction"} />
        <meta property="og:description" content={
         "Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"

        } />
        { /* End Facebook tags */}
        { /* Twitter tags */}
        <meta name="twitter:creator" content={"Cricket"} />
        <meta name="twitter:card" content={"Today's Match | G11 | Fantasy Cricket Betting Prediction"} />
        <meta name="twitter:title" content={"Today's Match | G11 | Fantasy Cricket Betting Prediction"} />
        <meta name="twitter:description" content={
         "Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"

        } />


           
           
            </Helmet>
            <div className="container">
                <h1 className="section-title ">Today Match Predictions - Cricket Betting Tips from Experts (100% Free)</h1>
                <div className="row" id="team_data" >
                    {
                        newMatch?.slice(0, next)?.map((data, index) => {
                            return (
                                <div className="col-sm-4 bottom" key={index}>

                                    <div className="container-fluid updatematch ">
                                        <Link to={location.pathname !== "/latest-match" ? `${data.id}/${data.title.replace(/\s+/g, '-').slice(0, -1).toLowerCase()}` : `cricket-prediction/${data.id}/${data.title.replace(/\s+/g, '-').slice(0, -1).toLowerCase()}    `} >

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
                                                    <img src={`https://grand11.in/g11/${data.team_one_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                                    <span className="vs" >VS</span>
                                                    <img src={`https://grand11.in/g11/${data.team_two_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
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
                <div className='row'>
                    <div className='col-12 center '>
                        {next < newMatch?.length && (
                            <button className="btn readleft" onClick={handleMoreImage}
                            >
                                Load more
                            </button>
                        )}
                        {next < newMatch?.length && (
                            <button className={next <= 6 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
                            >
                                Read Less
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}

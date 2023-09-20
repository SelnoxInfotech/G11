import React, { useContext, useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import parse from 'html-react-parser';
import News from "../../context/NewsApi";
import { Link } from "react-router-dom";


function LatestNews() {
    const data = useContext(News);
    const [latestnews, set_latest_news] = useState([])
    useEffect(() => {

        set_latest_news(data.Lnews)
    }, [data] )



    return (

        <div className="latest_bottem">
            <div className="container-fluid ">
                <div className="row border  ">
                    <div className="col-md-12 View_All_link">
                        <div>
                          <h3>  <span className="latest hadd"> Latest</span> <span className="latest_n hadd">News</span></h3>
                            <span className="  position-absolute end-0 view_all"><Link to="/Cricket-news"> View All  </Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid Latest_news_back " >
                {latestnews.map((data, index) => {
                    return (
                        <div className="container-fluid Latest_news_back" key={index}>
                            <Row >
                                <Col sm={6} className="center "   >
                                    <div className=" hovereffec ">
                                        <img className="hight_news img-fluid  " src={`https://grand11.in/g11/${data.image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                      
                                    </div>



                                </Col >
                                <Col sm={6} >
                                    <Link to={`/cricket-news/${data.id}/${data.title.replace(/\s+/g, '-')}`}>   <div className="hedding hovereffect text"><h3> {data.title.substr(0,55)}</h3></div></Link>
                                    <div><span className="content text">{parse(data.content.substr(0,1000))}</span></div>
                                    <Link to={`/cricket-news/${data.id}/${data.title.replace(/\s+/g, '-')}`}><button className="btn primary hovereffect" >Read Full News</button></Link>
                                </Col>

                                <div className="row ">
                                    <div className="col ">
                                        <div className=" position-absolute bottom-0 end-0 tag" >
                                            <span >{data.post_date}</span>
                                        </div>

                                    </div>

                                </div>
                            </Row>
                        </div>

                    )


                })
                }
            </div>

        </div >
    );
}

export default LatestNews;
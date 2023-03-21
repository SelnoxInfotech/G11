import React from 'react'
import Slider from "react-slick";
import {  AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
export default function CostumerRate() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        speed: 500,
        pauseOnHover:true,
        responsive: [
            {

                breakpoint: 1400,
                settings: {
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {

                breakpoint: 1000,
                settings: {
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: false,
                    pauseOnHover: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <div className='container-fluid rate_box '>

            <Slider {...settings}>
                <div>
                    <div className='container-fluid  rate_container d-flex justify-content-center'>
                        <div className='row marg'>
                            <div className='col-12 d-flex justify-content-center '>
                                <img className='rate_image ' src='image/blank.webp' alt="G11-Fantasy Cricket Prediction for Today's Match"/>
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Maria Luisa</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12 cen '>
                                    <p>G11 one of the best fantasy prediction app. Very nice application easy to use and interfaces is fantastic. There prediction is accurate. Thank You g11 team.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container-fluid  rate_container d-flex justify-content-center'>
                        <div className='row marg'>
                            <div className='col-12 d-flex justify-content-center '>
                                <img className='rate_image ' src='image/blank.webp' alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Bushra Parveen</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12  cen'>
                                    <p>Very good and genuine app. Pitch report, player performance and cheat sheet help very much to make highly impact team. Everyone should try this. </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container-fluid  rate_container d-flex justify-content-center'>
                        <div className='row marg'>
                            <div className='col-12 d-flex justify-content-center '>
                                <img className='rate_image ' src='image/blank.webp' alt="G11-Fantasy Cricket Prediction for Today's Match"/>
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Rishi Singh</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center ' >
                                <div className="stars">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12  cen'>
                                    <p>Very good app. Very good prediction. Really helpful it's give proper prediction, after taking his prediction I have won 10k, guys you really go for it this app.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container-fluid  rate_container d-flex justify-content-center'>
                        <div className='row marg'>
                            <div className='col-12 d-flex justify-content-center '>
                                <img className='rate_image ' src='image/blank.webp' alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Ishaan Sager</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12 cen'>
                                    <p>Amazing app help so much in making dream team. Very much impssed thank you G11 to make we win a big amount.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container-fluid  rate_container d-flex justify-content-center'>
                        <div className='row marg'>
                            <div className='col-12 d-flex justify-content-center '>
                                <img className='rate_image ' src='image/blank.webp' alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Jeetpratap singh</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12  cen'>
                                    <p>G11 is the best fantasy league prediction. I have won 5k. Thank you g11.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container-fluid  rate_container d-flex justify-content-center'>
                        <div className='row marg'>
                            <div className='col-12 d-flex justify-content-center '>
                                <img className='rate_image ' src='image/blank.webp' alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p> Anushka Patel</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12 cen'>
                                    <p>Very informative. I always used there prediction for my fantasy team. There prediction always accurate. Thank you g11 team</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

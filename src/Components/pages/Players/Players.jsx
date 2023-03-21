import axios from 'axios'
import { React, useState,useEffect } from 'react'
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
export default function Players() {
  const [player, setPlayer] = useState([])
  
  useEffect(() => {
    axios("https://grand11.in/g11/api/player", {
      method: 'GET',

    }).then(response => {
      setPlayer(response.data.result)

    })
  },[])
  return (
   
      <section id="team" class="pb-5">
        <Helmet>
          <title>Cricket Players Profile & Details | G11 Fantasy Cricket Prediction |</title>
          <meta  name="keywords" content="cricket betting tips" />
          <meta name='description' content='Cricket Players Profile & Details, Age, Hight and more, from G11 Fantasy Cricket Prediction App and site. Dream11 Cricket Betting Tips & Predictions '></meta>
        </Helmet>
        <div className="container">
          <h5 className="section-title ">Player's</h5>
          <div className="row">
            {
              player.map((data,index) => {
                return (

                  <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                    <div className="image-flip" >
                      <div className="mainflip flip-0">
                        <div className="frontside">
                          <div className="card">
                            <div className="card-body text-center">
                              <p className="card-text content col_card_heading">{data.player_type}</p>
                              <p><img className=" img-fluid" src={`https://grand11.in/g11/${data.image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" /></p>
                              <p className="card-text content col_card_heading">{data.name}</p>
                              <p className="card-text content col_card_heading">{data.team_name}</p>
                            </div>
                          </div>
                        </div>
                        <div className="backside">
                          <div className="card">
                            <div className="card-body text-center mt-4">
                              <p className="card-text content_new ">{parse(data.description)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    
  )
}

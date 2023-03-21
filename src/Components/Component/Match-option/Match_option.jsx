import React, {useContext,useEffect,useState} from "react";
import {  Link } from "react-router-dom";
import Braking from "../../context/NewsApi";
import axios  from "axios"
const Match_option = () => {
    const data = useContext(Braking); 

    const [breakingnews, set_latest_news] = useState('')
   
    useEffect(() => {
        axios("https://www.g11fantasy.com/NewsSection/Get-News/", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                set_latest_news(response.data.slice(-1)[0])
            } 
        })
       

     },[data])
 
    return (
       
            
            <div className="container-fluid">
          
               
                    <div className="row ">
                    <div className="col-4 braking_news">
                   
                     <p className="align-middle">BREAKING NEWS</p>
                   
                    </div>
                      <div className="col scroll-container ">
                      <span className="  scroll-text  "> <Link to= {`/Cricket-BreakingNews/${breakingnews.id}/${breakingnews.Title}`} className="hovereffect" > {breakingnews.Title} </Link></span>
                  </div>
                  

              </div>
              
               

            </div>
      


    );
};
export default Match_option;

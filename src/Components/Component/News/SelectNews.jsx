import React, { useState, useEffect } from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
import News from '../../pages/News/News';
import { useParams,useNavigate } from "react-router-dom";

export default function SelectNews() {
    const {name ,id} = useParams();
    const navigate = useNavigate()
    const [user_new, set_user_news] = useState([])
    window.scrollTo(0, 0);
    useEffect(() => {
        
        axios("https://grand11.in/g11/api/post", {
            method: 'GET',
        }).then(response => {
         
            const barking_news = response.data.result
            const select_news_by_user = barking_news?.find(data => data.id === id)
           if(select_news_by_user !== undefined){
            const arry = [select_news_by_user]
            set_user_news(arry)
           }
           else{
            const select_news_by_user = barking_news?.find(data => data.id === name)
            const arry = [select_news_by_user]
            set_user_news(arry)
       
           }
        })
    },[])
    // window.scrollTo(0, 0);
    
    return (
     
         <>
            {
                user_new?.map((user_new, index) => {
                    return (
                        <div className="row gx-5 margine" key={index}>
                            <div className="col-md-6 mb-4">
                                <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5 text-center" data-mdb-ripple-color="light">
                                    <img src={`https://grand11.in/g11/${user_new?.image}`} className="img-fluid select_news_image " alt="G11-Fantasy Cricket Prediction for Today's Match"/>
                                 
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h4><strong className='hedding text'>{user_new?.title}</strong></h4>
                            <span>
                            <p >{user_new?.post_date}</p>
                                <p>{parse(user_new?.content)}</p>
                            </span>
                            </div>
                        </div>
                    )
                })
            }
           
                 <News></News>
           

         </>

      

    )
}

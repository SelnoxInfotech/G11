import React, { useEffect, createContext, useState } from "react";

import axios from "axios"
const newsApi = createContext()
const NewsState = (props) => {
    const [matches, SetMatch] = useState([])
    const [Team, SetTeamlogo] = useState([])
    const [news, Setnews] = useState([])
    const [Lnews, SetLnews] = useState([])
    const [Braking, SetBraking] = useState([])



    useEffect(() => {
        axios("https://grand11.in/g11/api/matches", {
            method: 'GET',

        }).then(response => {
            SetMatch(response.data.result)
            
        })
    }, [])
    
    useEffect(() => {
        axios(" https://grand11.in/g11/api/teams", {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                SetTeamlogo(response.data.result)
            }
        })
    }, [])
    useEffect(() => {

        axios("https://grand11.in/g11/api/post", {
            method: 'GET',

        }).then(response => {

            Setnews(response.data.result)
            const data =  response.data.result[1]
            const barking_news =  response.data.result[0]

            const arry = [data]
            SetLnews(arry)
            // const newsarry =[]
            SetBraking(barking_news)

        })
    }, [])



    return (
      
        <newsApi.Provider value={ {matches,Team , news ,Lnews, Braking}} >
            {props.children}
        </newsApi.Provider>
      
    )
}
export default newsApi; 
export {NewsState};
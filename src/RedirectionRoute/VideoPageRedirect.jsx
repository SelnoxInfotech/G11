import React from "react";
import { useNavigate  , useParams} from "react-router-dom";
function CricketRedriction(props) {
   const Params =  useParams()
    const Navigate = useNavigate()
    const {Component} = props ;
    console.log(Params)
    React.useEffect(()=>{
    
        
            
              Navigate(`/latest-video/${Params.Title}/${Params.id}`)
            
     } ,[Component ])
    return (
  
      <div><Component/></div>
    )
  }
  export default  CricketRedriction;
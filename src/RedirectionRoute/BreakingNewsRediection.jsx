import React from "react";
import { useNavigate  , useParams,useLocation} from "react-router-dom";
function BreakingNewsRediection(props) {
   const Params =  useParams()
   const Location =  useLocation()
    const Navigate = useNavigate()
    const {Component} = props ;                             
    React.useEffect(()=>{
    
         if(Location.pathname.slice(0,21) === "/cricket-breakingnews"){

             Navigate(`/cricket-breaking-news/${Params.Title}/${Params.id}`)
         }
         if(Location.pathname.slice(0,16) === "/breakingnews"){
            Navigate(`/breaking-news`)
         }
              
            
     } ,[Component])
    return (
  
      <div><Component/></div>
    )
  }
  export default  BreakingNewsRediection;
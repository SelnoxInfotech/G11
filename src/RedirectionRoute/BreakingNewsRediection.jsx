import React from "react";
import { useNavigate  , useParams,useLocation} from "react-router-dom";
function BreakingNewsRediection(props) {
   const Params =  useParams()
   const Location =  useLocation()
    const Navigate = useNavigate()
    const {Component} = props ; 
    console.log(Location.pathname.slice(0,21))                            
    React.useEffect(()=>{
    
         if(Location.pathname.slice(0,21) === "/cricket-breakingnews" || Location.pathname.slice(0,21) ==='/Cricket-BreakingNews'){

             Navigate(`/cricket-breaking-news/${Params.Title}/${Params.id}`)
         }
         if(Location.pathname.slice(0,16) === "/breakingnews" || Location.pathname.slice(0,16) === "/Breakingnews" ){
            Navigate(`/breaking-news`)
         }
              
            
     } ,[Component])
    return (
  
      <div><Component/></div>
    )
  }
  export default  BreakingNewsRediection;
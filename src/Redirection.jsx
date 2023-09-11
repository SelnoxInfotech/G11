import React from "react";
import { useNavigate  , useParams} from "react-router-dom";
function Redirection(props) {
   const Params =  useParams()
    const Navigate = useNavigate()
    const {Component} = props ;
     console.log(Params)
    React.useEffect(()=>{
    
        
            
              Navigate(`/Latest-match/Cricket-prediction/${Params.preview}/${Params.match}/${Params.Title}/${Params.id}`)
            
     } ,[Component])
    return (
  
      <div><Component/></div>
    )
  }
  export default  Redirection;
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function CricketRedriction(props) {
  const Params = useParams()
  const Navigate = useNavigate()
  const { Component } = props;
  React.useEffect(() => {
    Navigate(`/cricket-news/${Params.id}/${Params.name}`)
  }, [Component])
  return (

    <div><Component /></div>
  )
}
export default CricketRedriction;
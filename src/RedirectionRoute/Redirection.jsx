import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function Redirection(props) {
  const Params = useParams()
  const Navigate = useNavigate()
  const { Component } = props;
  React.useEffect(() => {
    Navigate(`/latest-match/cricket-prediction/${Params.preview}/${Params.match}/${Params.Title.replace(/\s+/g, '-')}/${Params.id}`)
  }, [Component])
  return (

    <div><Component /></div>
  )
}
export default Redirection;
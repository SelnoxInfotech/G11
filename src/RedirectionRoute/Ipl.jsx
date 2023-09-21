import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function Ipl(props) {
  const Params = useParams()
  const Navigate = useNavigate()
  const { Component } = props;
  React.useEffect(() => {
    Navigate(`/ipl_2023/${Params.Title.toLowerCase()}/${Params.id}`)
  }, [Component])
  return (

    <div><Component /></div>
  )
}
export default Ipl;
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Latestmatch(props) {
    const location = useLocation()
    const Navigate = useNavigate()
    const { Component } = props;
    React.useEffect(() => {

        if (location.pathname === "/Latest-Match") {

            Navigate(`/latest-match`)
        }
        if (location.pathname === "/Cricket-news") {
            Navigate(`/cricket-news`)
        }
        if (location.pathname === "/Ipl_2023") {
            Navigate(`/ipl_2023`)
        }
        if (location.pathname === "/Latest-Video") {
            Navigate(`/latest-video`)
        }

    }, [Component])
    return (

        <div><Component /></div>
    )
}
export default Latestmatch;
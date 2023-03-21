import React from "react";
import { Helmet } from "react-helmet";


const Metatage = ({ title, description, imageUrl, imageAlt }) => {
    return (
        <Helmet>

            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content={description}></meta>
            <meta property="og:image" content={imageUrl}></meta>
            <meta property="og:url" content={" https//www.grand11.in/" + window.location.pathname}></meta>
            <meta property="twitter:card" content= "summary_large_image"></meta>
            <meta property="twitter:image:alt" content= {imageAlt}></meta>
        </Helmet>
    )
}


export default Metatage; 
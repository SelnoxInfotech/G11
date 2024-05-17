import React from 'react'
import { Helmet } from 'react-helmet'

export default function Disclaimer() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  return (
    <div className='container-fluid  center'>
      <Helmet>
        <title>Disclaimer | G11 Fantasy Cricket Prediction </title>
        <link rel="canonical" href="https://grand11.in/disclaimer" ></link>
        <meta name='description' content="The disclaimer page provides crucial information about our website's policies. Make sure you are aware of our terms and conditions."></meta>
        {/* Facebook tags */}
        <meta property="og:type" content={"Cricket"} />
        <meta property="og:title" content={"Disclaimer | G11 Fantasy Cricket Prediction"} />
        <meta property="og:description" content={"The disclaimer page provides crucial information about our website's policies. Make sure you are aware of our terms and conditions."} />
        { /* End Facebook tags */}
        { /* Twitter tags */}
        <meta name="twitter:creator" content={"Cricket"} />
        <meta name="twitter:card" content={"Disclaimer | G11 Fantasy Cricket Prediction"} />
        <meta name="twitter:title" content={"Disclaimer | G11 Fantasy Cricket Prediction"} />
        <meta name="twitter:description" content={"The disclaimer page provides crucial information about our website's policies. Make sure you are aware of our terms and conditions."} />

      </Helmet>
      <div className='Container'>
        <div className='row'>
          <div className='col-12 hedding center'>
            <h1>Disclaimer</h1>
          </div>

          <hr></hr>

        </div >
        <div className='container'>
          <div className='row '>
            <div className='col-12 textSize'>
              <p>This website is only content for standard informational purposes. The data is provided by G11 Prediction, and while we make every effort to keep the data accurate and up to date, we make no guarantees about its accuracy, completeness, reliability, suitability, or availability concerning the website or the data, products, services, or related graphics located therein for any purpose. You can assume all risks if you rely on this material in any way.</p>
              <p>
              You can access websites not controlled by G11 Prediction by using this website to link to them. The nature, content, and accessibility of those sites are outside our control. All the links are provided for convenience only and are not recommendations of the content found there.
              </p>
              <p>
              Every effort is taken to maintain the website's availability and functionality. G11 Prediction disclaims all liability and duty if the website is momentarily inaccessible for reasons beyond our control.
              </p>
              <p>
              The opinions expressed by the authors in articles under several categories, including Opinions and Analysis, are those of the authors and should not be taken to represent the company. G11 Prediction will not consider any claims against information provided on the website in the event of disagreements; instead, those objections should be addressed to the Author.
              </p>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  )
}


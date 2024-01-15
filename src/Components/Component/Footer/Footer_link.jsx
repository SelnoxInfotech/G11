import React from 'react'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { IoMdCall } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { faFacebook, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import { FaRssSquare } from "react-icons/fa";
export default function Footer_link() {
  return (
    <div className='footer_link'>
      <div className='container link'>
        <p className='Follow'>Follow us on social media</p>
      </div>
      <div className='container link socal_link color'>
        <a href='https://www.facebook.com/g11sport/ ' ><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a href='https://www.youtube.com/@g11-sportfantasyprediction66'><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
        <a href='https://www.linkedin.com/company/g11-sport-fantasy-prediction/' className='linkin'><AiFillLinkedin /></a>
        <a href='https://www.instagram.com/g11sport/'> <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a href='https://twitter.com/g11prediction'><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href='tel:+916262003399' className='calling'><span><IoMdCall></IoMdCall> </span> </a>
        <a href='https://g11prediction.com/Rss.xml' className='calling'><span>   <FaRssSquare /></span> </a>
      </div>
      <div className='container link '>
        <ul className='policy_link  '>

          <NavLink to="/privacy-policy"><li className='term_privacy hovereffect '> &nbsp;Privacy Policy&nbsp; </li></NavLink>
          <NavLink to="/disclaimer">  <li className='term_privacy hovereffect'>|&nbsp;Disclaimer&nbsp;</li></NavLink>
          <NavLink to="/faq"><li className='term_privacy hovereffect'>|&nbsp;FAQ</li></NavLink>

          {/* <li>|&nbsp; </li> */}
        </ul>
      </div>
      <div className='container-fluid copy_right'>
        <p>Copyright 2022 by <a href="https://selnox.com/" >selnox.com</a></p>
      </div>
    </div>
  )
}

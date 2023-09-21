import React from 'react'
import { NewsState } from "../../context/NewsApi";
import Banner from '../../Component/Banner/Banner';
import Match from '../../Component/Match-option/Match_option';
import UpdateMatch from '../../Component/New_match/UpdateMatch';
import LatestNews from '../../Component/Latest_news/LatestNews'
import HighLightNews from "../../Component/Highlight_News/HightLight"
import Teams from "../../Component/Team_logo/Teams"
import Footer from '../../Component/Footer/Footer';
import StaticContent from '../../Component/StaticContent/Static_Content';
import Statictodaymatch from '../../Component/StaticContent/Static _todaymatch';
import Staticbenifit from '../../Component/StaticContent/Static_benifit';
import Companyexpridetail from '../../Component/Company/Company_expri_detail';
import Testimonial from "../../Component/StaticContent/Testimonial";
import CostumerRate from "../../Component/StaticContent/CostumerRate";
import Guaranteed from "../../Component/StaticContent/Guaranteed";
import { Helmet } from "react-helmet";
import Breaking from '../../Component/Breaking/BreakingNews';
import LatestVideoPlaylist from "../../pages/Video/LatestVideoPlaylist"


export default function Home() {

  return (



    <div>

      {/* <Metatage
        title="G11-Fantasy Cricket Prediction for Today's Match"
        description={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction"}
        imageUrl={"image/G11.png"}
        imageAlt={"164"}>

      </Metatage> */}

      <NewsState>


        <Helmet>
          <title>G11- Fantasy Cricket Prediction for Today's Match |  </title>
          <link rel="canonical" href="https://g11prediction.com/" ></link>
          <meta name="keywords" content="G11 Fantasy Cricket Prediction, cricket news, Today's match Prediction, Latest Cricket News, Cricket Betting Tips & Predictions, fantasy cricket prediction, dream 11 today prediction, today best cricket match prediction" />
          <meta name='description' content="G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."></meta>
          
          {/* Facebook tags */}

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://g11prediction.com/" />
          <meta property="og:title" content={"G11- Fantasy Cricket Prediction for Today's Match | "} />
          <meta property="og:description" content={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."} />
          { /* End Facebook tags */}
          { /* Twitter tags */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://g11prediction.com/" />
          <meta name="twitter:card" content={"G11- Fantasy Cricket Prediction for Today's Match | "} />
          <meta name="twitter:title" content={"G11- Fantasy Cricket Prediction for Today's Match | "} />
          <meta name="twitter:description" content={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."} />


        </Helmet>




        <Match></Match>
        <Banner></Banner>
        <UpdateMatch></UpdateMatch>
        <StaticContent></StaticContent>
        <Breaking></Breaking>
        <LatestNews></LatestNews>
        <HighLightNews></HighLightNews>
        <LatestVideoPlaylist></LatestVideoPlaylist>
        <Statictodaymatch></Statictodaymatch>
        <Staticbenifit></Staticbenifit>
        <Teams></Teams>
        <Testimonial></Testimonial>
        <CostumerRate></CostumerRate>
        <Guaranteed></Guaranteed>
        <Companyexpridetail></Companyexpridetail>
        <Footer></Footer>
      </NewsState>
    </div>

  )
}

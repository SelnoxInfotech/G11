import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home"
import Navbar from './Components/Component/Navbar/Navbar';
import Footerlink from './Components/Component/Footer/Footer_link';
import Players from "./Components/pages/Players/Players"
import News from "./Components/pages/News/News"
import PrivacyPolicy from "./Components/pages/Privacy_Policy/Privacy_Policy"
import Series from "./Components/pages/Series/Series"
import Contact from "./Components/pages/Contact_us/Contact_us"
import Terms from './Components/pages/Terms/Terms';
import Scroll from "./Components/Component/ScrollTop/Scroll"
import SelectNews from './Components/Component/News/SelectNews';
import About from './Components/pages/About/About';
import FAQ from './Components/pages/FAQ/FAQ';
import MatchPreview from "./Components/Component/New_match/MatchPreview";
import PageNotFound from "./Components/pages/PagenotFound/PageNotFound"
import Latestmatch from "./Components/Component/New_match/Latest_match"
import BreakingNewsList from './Components/Component/Breaking/BreakingNewsList';
import Breaking from './Components/Component/Breaking/Breaking';
import LatestvideoPlay from "./Components/pages/Video/Latest_videoPlay"
import Video from './Components/pages/Video/Video';
import IPlPriemier from "./Components/pages/IplPrimer/Ipl"
import SelcectIpl from "./Components/pages/IplPrimer/SelectIplNews"
import Redirection from "../src/Redirection"
import IccWorld from "../src/Components/pages/IccWorldCup/IccWorldCup"
import SelectIccWorldCup from "../src/Components/pages/IccWorldCup/SelectIccWorldCup"
import RulsRegulation from "./Components/pages/Ruls&Regulation/RulsRegulation"
import Ruls_Regulation from '../src/Components/pages/Ruls&Regulation/RulsRegulationsbyid';
import Cricketplayers from "../src/Components/pages/Cricketplayers/Cricketplayers"
import CricketplayersByid from "../src/Components/pages/Cricketplayers/CricketplayersByid"
export default function Routing() {
  return (

    <BrowserRouter>

      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/players" element={<Players />} />
        <Route path="/Cricket-news" element={<News />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/Terms-and-Conditions" element={<Terms />} />
        <Route path="/Cricket-News/:id/:name" element={<SelectNews />} />
        {/*  Match Priview Route */}
        <Route path='/Latest-match/Cricket-prediction/:id/:match' element={<MatchPreview></MatchPreview>} />
        <Route path='/Latest-match/Cricket-prediction/:preview/:match/:Title/:id' element={<MatchPreview/>} />
        <Route path='/Latest-match/Cricket-prediction/:id/:match/:Title/:preview' element={<Redirection Component={MatchPreview } ></Redirection>} />
        {/* <Route path='/Latest-match/Cricket-prediction/:id/:match/:Title' element={<MatchPreview />} /> */}
        {/* <Route path='/Latest-match/Cricket-prediction/:id/:match/:Title/:preview' element={<MatchPreview />} /> */}
        <Route path='/Cricket-prediction/:id/:match' element={<MatchPreview></MatchPreview>} />
        <Route path='/Cricket-prediction/:id/:match/:Title/:preview' element={<MatchPreview />} />
        {/* <Route path='/Cricket-prediction_match/:id/:match/:Title/:preview' element={<MatchPreview />} /> */}
        {/* End */}
        <Route path="/Latest-match" element={<Latestmatch></Latestmatch> } />
        <Route path="/Latest-match/Cricket-prediction/" element={<Latestmatch></Latestmatch>} />
        <Route path='/Cricket-BreakingNews/:id/:Title' element={<Breaking></Breaking>} />
        <Route path='/Latest-Video/:id/:Title' element={<LatestvideoPlay></LatestvideoPlay>} />
        <Route path='/Latest-Video/' element={<Video></Video>} />
        <Route path='/BreakingNews' element={<BreakingNewsList></BreakingNewsList>} />
        <Route path='/Ipl_2023' element={<IPlPriemier></IPlPriemier>} />
        <Route path='/Ipl_2023/:Title/:id' element={<SelcectIpl></SelcectIpl>} />
        <Route path='/ICC-Cricket-World-Cup-2023/' element={<IccWorld></IccWorld>} />
        <Route path='/ICC-Cricket-World-Cup-2023/:Title/:id' element={<SelectIccWorldCup></SelectIccWorldCup>} />
        <Route path='/rules-and-regulation/' element={<RulsRegulation></RulsRegulation>} />
        <Route path='/rules-and-regulation/:Title/:id' element={<Ruls_Regulation></Ruls_Regulation>} />


        <Route path='/cricket-players/' element={<Cricketplayers></Cricketplayers>} />
        <Route path='/cricket-players/:Title/:id' element={<CricketplayersByid></CricketplayersByid>} />
        <Route path='*' element={<PageNotFound></PageNotFound>} />
      </Routes>
      <Footerlink></Footerlink>
      <Scroll></Scroll>
    </BrowserRouter>


  )
}

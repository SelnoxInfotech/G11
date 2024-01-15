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
import IPL2024 from "./Components/pages/IplPrimer/Ipl2024/Ipl2024"
import SelcectIpl from "./Components/pages/IplPrimer/SelectIplNews"
import SelcectIpl2024 from "./Components/pages/IplPrimer/Ipl2024/SelectIpl2024"
import Redirection from "./RedirectionRoute/Redirection"
import IccWorld from "../src/Components/pages/IccWorldCup/IccWorldCup"
import IccWorld2024 from "../src/Components/pages/IccWorldCup/ICCworld2024/iccWorld2024"
import SelectIccWorldCup from "../src/Components/pages/IccWorldCup/SelectIccWorldCup"
import SelectIccWorldCup2024 from "../src/Components/pages/IccWorldCup/ICCworld2024/Selecticcworld"
import RulsRegulation from "./Components/pages/Ruls&Regulation/RulsRegulation"
import RulsRegulation1 from '../src/Components/pages/Ruls&Regulation/RulsRegulationsbyid';
import Cricketplayers from "../src/Components/pages/Cricketplayers/Cricketplayers"
import CricketplayersByid from "../src/Components/pages/Cricketplayers/CricketplayersByid"
import BreakingNewsRediection from './RedirectionRoute/BreakingNewsRediection';
import CricketRedriction from './RedirectionRoute/Cricketredirection';
import VideoPageRedirect from "./RedirectionRoute/VideoPageRedirect"
import Latest from "./RedirectionRoute/LatestMatch"
import Ipl from './RedirectionRoute/Ipl';
import Disclaimer from './Components/pages/Privacy_Policy/Disclaimer';
export default function Routing() {
  return (

    <React.Fragment>
      <BrowserRouter>

        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/players" element={<Players />} />

          {/* News */}
          <Route path="/Cricket-news" element={ <Latest Component={News} ></Latest>} />
          <Route path="/cricket-news" element={<News />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/fAQ" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/series" element={<Series />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path='/cricket-news/:name/:id' element={<CricketRedriction Component={SelectNews}></CricketRedriction>} />
          <Route path='/cricket-news/:id/:name' element={<SelectNews></SelectNews>} />
          {/*  Match Priview Route */}
          <Route path='/latest-match/cricket-prediction/:id/:match' element={<MatchPreview></MatchPreview>} />
          <Route path='/latest-match/cricket-prediction/:preview/:match/:Title/:id' element={<MatchPreview />} />
          <Route path='/latest-match/cricket-prediction/:id/:match/:Title/:preview' element={<Redirection Component={MatchPreview} ></Redirection>} />
          {/* <Route path='/Latest-match/Cricket-prediction/:id/:match/:Title' element={<MatchPreview />} /> */}
          {/* <Route path='/Latest-match/Cricket-prediction/:id/:match/:Title/:preview' element={<MatchPreview />} /> */}
          <Route path='/cricket-prediction/:id/:match' element={<MatchPreview></MatchPreview>} />
          <Route path='/cricket-prediction/:id/:match/:Title/:preview' element={<MatchPreview />} />
          {/* <Route path='/Cricket-prediction_match/:id/:match/:Title/:preview' element={<MatchPreview />} /> */}
          {/* End */}
          <Route path="/Latest-Match" element={<Latest Component={Latestmatch} ></Latest>} />
          <Route path="/latest-match" element={<Latestmatch></Latestmatch>} />
          <Route path="/latest-match/cricket-prediction" element={<Latestmatch></Latestmatch>} />
          <Route path='/Cricket-BreakingNews/:id/:Title' element={<BreakingNewsRediection Component={Breaking}></BreakingNewsRediection>} />
          <Route path='/cricket-breakingnews/:id/:Title' element={<BreakingNewsRediection Component={Breaking}></BreakingNewsRediection>} />
          <Route path='/cricket-breaking-news/:Title/:id' element={<Breaking></Breaking>} />
          <Route path='/latest-video/:id/:Title' element={<VideoPageRedirect Component={LatestvideoPlay}></VideoPageRedirect>} />
          <Route path='/latest-video/:id/:Title' element={<LatestvideoPlay></LatestvideoPlay>} />
          <Route path='/Latest-Video' element={<Latest Component={Video} ></Latest>} />
          <Route path='/latest-video' element={<Video></Video>} />
          <Route path='/breakingnews' element={<BreakingNewsRediection Component={BreakingNewsList}></BreakingNewsRediection>} />
          <Route path='/breaking-news' element={<BreakingNewsList></BreakingNewsList>} />
          <Route path='/ipl_2023' element={ <Latest Component={IPlPriemier} ></Latest> } />
          <Route path='/ipl-2024' element={ <Latest Component={IPL2024} ></Latest> } />
          <Route path='/Ipl_2023/:Title/:id' element={<Ipl Component={SelcectIpl}></Ipl>} />
          <Route path='/ipl_2023/:Title/:id' element={<SelcectIpl></SelcectIpl>} />
          <Route path='/ipl_2024/:Title/:id' element={<SelcectIpl2024></SelcectIpl2024>} />
          <Route path='/icc-cricket-world-cup-2023' element={<IccWorld></IccWorld>} />
          <Route path='/icc-cricket-world-cup-2024' element={<IccWorld2024></IccWorld2024>} />
          <Route path='/icc-cricket-world-cup-2023/:Title/:id' element={<SelectIccWorldCup></SelectIccWorldCup>} />
          <Route path='/icc-cricket-world-cup-2024/:Title/:id' element={<SelectIccWorldCup2024></SelectIccWorldCup2024>} />
          <Route path='/cricket-rules-and-regulation' element={<RulsRegulation></RulsRegulation>} />
          <Route path='/cricket-rules-and-regulation/:Title/:id' element={<RulsRegulation1></RulsRegulation1>} />


          <Route path='/cricket-players' element={<Cricketplayers></Cricketplayers>} />
          <Route path='/cricket-players/:Title/:id' element={<CricketplayersByid></CricketplayersByid>} />
          <Route path='*' element={<PageNotFound></PageNotFound>} />
        </Routes>
        <Footerlink></Footerlink>
        <Scroll></Scroll>
      </BrowserRouter>

    </React.Fragment>

  )
}

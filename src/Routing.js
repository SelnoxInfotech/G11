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

export default function Routing() {
  window.scrollTo(0, 0);
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
          <Route path='/Cricket-prediction/:id/:match' element={<MatchPreview />} />
          <Route path='/Latest-match/Cricket-prediction/:id/:match' element={<MatchPreview />} />
          <Route path='/Latest-match/Cricket-prediction/:id/:match/:Title' element={<MatchPreview />} />
          <Route path='/Latest-match/Cricket-prediction/:id/:match/:Title/:preview' element={<MatchPreview />} />
          <Route path='/Cricket-prediction/:id/:match/:Title' element={<MatchPreview />} />
          <Route path="/Latest-match" element={<Latestmatch></Latestmatch>} />
          <Route path='/Cricket-BreakingNews/:id/:Title' element ={<Breaking></Breaking>} />
          <Route path='/Latest-Video/:id/:Title' element ={<LatestvideoPlay></LatestvideoPlay>} />
          <Route path='/Latest-Video/' element ={<Video></Video>} />
          <Route path='/BreakingNews' element ={<BreakingNewsList></BreakingNewsList>} />

          <Route path='*' element={ <PageNotFound></PageNotFound>} />
        </Routes>
        <Footerlink></Footerlink> 
       <Scroll></Scroll>
      </BrowserRouter>

   
  )
}

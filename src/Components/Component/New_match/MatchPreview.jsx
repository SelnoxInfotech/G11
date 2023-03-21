import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { Helmet } from 'react-helmet';

function MatchPreview(props) {
  const [matchpreviwe, setmatchpreviwe] = useState("")
  const [Team_Guide, Set_Team_Guide] = useState('')
  const [Detail, SetDetails_Data] = useState('')
  const [Teams_image, SetTeams_image] = useState('')
  const { id } = useParams();
  const _id = id
  useEffect(() => {
    var url = "https://grand11.in/g11/api/page/match_details/" + _id
    if (_id != null) {
      Axios(url, {
        method: 'Post',
      }).then(response => {
        const data = response.data
        var parser = new DOMParser();
        var doc = parser.parseFromString(data, 'text/html');
        // HTML section//// 
        var parserhtm = doc.querySelectorAll('section');
        //  container /////
        var container = parserhtm[1].querySelector(".container")
        var containerData = container.querySelectorAll(".row")[1]
        var a = containerData.querySelector("div").innerHTML

        setmatchpreviwe(a)
        // Team section///
        var Team = parserhtm[1].querySelector(".container")
        var TeamsData = Team.querySelectorAll(".row")[1]
        var ab = TeamsData.querySelectorAll("div")
        var team = ab[1].innerHTML
        Set_Team_Guide(team)
        // Details Analysis
        var Details = parserhtm[1].querySelector(".container")
        var Details_Analysis = Details.querySelectorAll(".row")[1]
        var ALLDetails = Details_Analysis.querySelectorAll("div")
        var Details_Data = ALLDetails[2].innerHTML
        SetDetails_Data(Details_Data)
        //  Teams image //
        var Teams = parserhtm[1].querySelector(".container")
        var Teams_ = Teams.querySelectorAll(".row")[1]
        var TeamsData1 = Teams_.querySelectorAll("div")
        var Team_data = TeamsData1[4].innerHTML
        SetTeams_image(Team_data)
      })
    }
  }, [_id])
  return (

    <div>
      <Helmet>
        <title>Today's Match | G11 | Fantasy Cricket Betting Prediction | </title>
        <meta name='description' content="Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"></meta>
      </Helmet>
      <Tabs
        defaultActiveKey="Match_Preview"
        id="uncontrolled-tab-example"
        className="mb-3" >
        < Tab className='color' eventKey="Match_Preview" title="Match Preview">
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='font' dangerouslySetInnerHTML={{ __html: matchpreviwe }}></div>
              </div>
            </div>
          </div>
        </Tab>
        < Tab className='color' eventKey="Team_Guide" title="Team Guide">
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='font' dangerouslySetInnerHTML={{ __html: Team_Guide }}></div>
              </div>
            </div>
          </div>
        </Tab>
        < Tab className='color' eventKey="Details_Analysis" title="Cheat sheet ">
          <div className='container'>
            <div className='row'>
              <div className='col-12 '>
                <div className='font' dangerouslySetInnerHTML={{ __html: Detail }}></div>
              </div>
            </div>
          </div>
        </Tab>
        < Tab className='color' eventKey="Teams " title="Teams">
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='Teams_image_full img-thumbnail' dangerouslySetInnerHTML={{ __html: Teams_image }}></div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>

  )
}
export default MatchPreview;
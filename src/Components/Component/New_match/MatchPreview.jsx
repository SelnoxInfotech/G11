import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
function MatchPreview(props) {
  const Navigate = useNavigate();
  const [Title1, SetTitle] = useState()
  const [matchpreviwe, setmatchpreviwe] = useState("")
  const [Team_Guide, Set_Team_Guide] = useState('')
  const [Detail, SetDetails_Data] = useState('')
  const [Teams_image, SetTeams_image] = useState('')
  const [metaDiscription, SetmetaDiscription] = useState('')
  const { id, match, preview } = useParams();
  const _id = id
  useEffect(() => {
    var url = "https://grand11.in/g11/api/page/match_details/" + _id
    var p = "https://grand11.in/g11/api/page/match_details/" + preview
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
        // const spanBoxes = a.getElementsByTagName("p");
        const list = containerData.querySelector("div")?.getElementsByTagName("*")
        for (let i = 0; i < list.length; i++) {
          list[i].innerHTML === "Preview :" && SetmetaDiscription(list[i + 1].innerText + list[i + 2].innerText);
        };
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


        const input = containerData.querySelector("div >p").innerHTML;
        const f = containerData.querySelector("div >h3").innerHTML;
        Navigate(`/Latest-match/Cricket-prediction/${f.replace(/\s+/g, '-')}/${match}/${input.replace(/\s+/g, '-').slice(26)}/${_id}`)

        SetTitle(input.replace(/\s+/g, '-'))
      }).catch((error) => {
        Axios(p, {
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
          const list = containerData.querySelector("div")?.getElementsByTagName("*")
          for (let i = 0; i < list.length; i++) {
            list[i].innerHTML === "Preview :" && SetmetaDiscription(list[i + 1].innerText + list[i + 2].innerText)
          };
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


          const input = containerData.querySelector("div >p").innerHTML;
          const f = containerData.querySelector("div >h3").innerHTML;
          Navigate(`/latest-match/cricket-prediction/${f.replace(/\s+/g, '-')}/${match}/${input.replace(/\s+/g, '-').slice(26)}/${preview}`)
          SetTitle(input.replace(/\s+/g, '-'))
        })
      })
    }

  }, [_id])

  function TaBFunction(e) {
    Navigate(`/latest-match/cricket-prediction/${e.target.innerText.replace(/\s+/g, '-')}/${match}/${Title1.replace(/\s+/g, '-').slice(26)}/${_id}`)
  }

  return (

    <div>
      <Helmet>
        <title>{`${preview} | ${Title1?.replace(/\-+/g, ' ').slice(26)}`}| Cricket Prediction |  </title>
        <link rel="canonical" href="https://g11prediction.com/latest-match" ></link>
        <meta name="keywords" content="Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match" />
        <meta name='description'
          content={
            preview === "Match-Preview" ? metaDiscription.slice(0, 160)
              : preview === "Team-Guide" ? `${Title1?.replace(/\-+/g, ' ').slice(26)}` + "team guide cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"
                : preview === "Cheat-sheet" ? `${Title1?.replace(/\-+/g, ' ').slice(26)}` + "Cheet Sheet cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"
                  : preview === "Teams" && `${Title1?.replace(/\-+/g, ' ').slice(26)}` + "Teams cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"

          }

        ></meta>
      </Helmet>
      <Tabs
        defaultActiveKey="Match_Preview"
        id="uncontrolled-tab-example"
        className="mb-3"
        onClick={TaBFunction}>
        < Tab className='color' eventKey="Match_Preview" title={preview === "Match-Preview" ? <h1 className='match_priview' >Match Preview</h1> : "Match Preview"} >
          <div className='container'>
            <div className='row'>
              <div className='col-12 ' >
                <div className='font' dangerouslySetInnerHTML={{ __html: matchpreviwe }}></div>
              </div>
            </div>
          </div>
        </Tab>
        < Tab className='color' eventKey="Team_Guide" title={preview === "Team-Guide" ? <h1 className='match_priview' >Team Guide</h1> : "Team Guide"} >
          <div className='container' section >
            <div className='row'>
              <div className='col-12'>
                <div className='font' dangerouslySetInnerHTML={{ __html: Team_Guide }}></div>
              </div>
            </div>
          </div>
        </Tab>

        < Tab className='color' eventKey="Details_Analysis" title={preview === "Cheat-sheet" ? <h1 className='match_priview' >Cheat sheet</h1> : "Cheat sheet"}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 '>
                <div className='font' dangerouslySetInnerHTML={{ __html: Detail }}></div>
              </div>
            </div>
          </div>
        </Tab>
        < Tab className='color' eventKey="Teams" title={preview === "Teams" ? <h1 className='match_priview' >Teams</h1> : "Teams"}>
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
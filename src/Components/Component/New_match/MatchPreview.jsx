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
  function modifystr(str) {
    str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    str = str.trim().replaceAll(' ', "-");
    let a = 0;
    while (a < 1) {
      if (str.includes("--")) {
        str = str.replaceAll("--", "-")
      } else if (str.includes("//")) {
        str = str.replaceAll("//", "/")
      } else if (str.includes("//")) {
        str = str.replaceAll("-/", "/")
      } else if (str.includes("//")) {
        str = str.replaceAll("/-", "/")
      } else {
        a++
      }
    }

    return str
  }
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
        Navigate(`/latest-match/cricket-prediction/${f.replace(/\s+/g, '-').toLowerCase()}/${match}/${modifystr(input.replace(/\s+/g, '-').slice(26).toLowerCase())}/${_id}`)

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
          Navigate(`/latest-match/cricket-prediction/${f.replace(/\s+/g, '-')}/${match}/${modifystr(input.replace(/\s+/g, '-').slice(26).toLowerCase())}/${preview}`)
          SetTitle(input.replace(/\s+/g, '-'))
        })
      })
    }

  }, [_id])

  function TaBFunction(e) {
    Navigate(`/latest-match/cricket-prediction/${e.target.innerText.replace(/\s+/g, '-').toLowerCase()}/${match}/${modifystr(Title1.replace(/\s+/g, '-').slice(26).toLowerCase())}/${_id}`)
  }
  return (

    <div>
      <Helmet>
        <title>{`${preview?.replace('-', ' ')} | ${Title1?.replace(/\-+/g, ' ').slice(26)}`}| Cricket Prediction |  </title>
        <link rel="canonical" href="https://g11prediction.com/latest-match" ></link>
        <meta name="keywords" content="Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match" />
        {/* <metatext></meta> */}
        <meta name='description'
          content={
            preview === "match-preview" ? metaDiscription.slice(0, 160)
              : preview === "team-guide" ? `${Title1?.replace(/\-+/g, ' ').slice(26)}` + " " + "team guide cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"
                : preview === "cheat-sheet" ? `${Title1?.replace(/\-+/g, ' ').slice(26)}` + " " + "Cheet Sheet cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"
                  : preview === "teams" && `${Title1?.replace(/\-+/g, ' ').slice(26)}` + " " + "Teams cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"

          }

        ></meta>
        {/* Facebook tags */}
        <meta property="og:type" content={"website"} />
        <meta property="og:title" content={`${preview} | ${Title1?.replace(/\-+/g, ' ').slice(26)}` + "| Cricket Prediction | "} />
        <meta property="og:description" content={
          preview === "match -preview" ? metaDiscription.slice(0, 160)
            : preview === "team-guide" ? `${Title1?.replace(/\-+/g, ' ').slice(26) + "team guide cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"}`
              : preview === "cheat-sheet" ? `${Title1?.replace(/\-+/g, ' ').slice(26) + "Cheet Sheet cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"}`
                : preview === "teams" && `${Title1?.replace(/\-+/g, ' ').slice(26)}` + "Teams cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"

        } />
        { /* End Facebook tags */}
        { /* Twitter tags */}
        <meta name="twitter:creator" content={"Cricket"} />
        <meta name="twitter:card" content={`${preview} | ${Title1?.replace(/\-+/g, ' ').slice(26)}` + "| Cricket Prediction | "} />
        <meta name="twitter:title" content={`${preview} | ${Title1?.replace(/\-+/g, ' ').slice(26)}` + "| Cricket Prediction | "} />
        <meta name="twitter:description" content={
          preview === "matchp-review" ? metaDiscription.slice(0, 160)
            : preview === "team-guide" ? `${Title1?.replace(/\-+/g, '').slice(26) + "team guide cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"}`
              : preview === "cheat-sheet" ? `${Title1?.replace(/\-+/g, '').slice(26) + "Cheet Sheet cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"}`
                : preview === "teams" && `${Title1?.replace(/\+/g, '').slice(26) + "Teams cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"}`

        } />

      </Helmet>
      <Tabs
        defaultActiveKey="match_preview"
        id="uncontrolled-tab-example"
        className="mb-3"
        onClick={TaBFunction}>
        < Tab className='color' eventKey="match_preview" title={preview === "match-preview" ? <h1 className='match_priview' >Match Preview</h1> : <h2 className='match_priview'>Match Preview</h2>} >
          <div className='container'>
            <div className='row'>
              <div className='col-12 ' >
                <div className='font' dangerouslySetInnerHTML={{ __html: matchpreviwe }}></div>
              </div>
            </div>
          </div>
        </Tab>
        < Tab className='color' eventKey="Team_Guide" title={preview === "team-guide" ? <h1 className='match_priview' >Team Guide</h1> : <h2 className='match_priview'>Team Guide</h2>} >
          <div className='container' section >
            <div className='row'>
              <div className='col-12'>
                <div className='font' dangerouslySetInnerHTML={{ __html: Team_Guide }}></div>
              </div>
            </div>
          </div>
        </Tab>

        < Tab className='color' eventKey="details_Analysis" title={preview === "cheat-sheet" ? <h1 className='match_priview' >Cheat sheet</h1> : <h2 className='match_priview'>Cheat sheet</h2>}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 '>
                <div className='font' dangerouslySetInnerHTML={{ __html: Detail }}></div>
              </div>
            </div>
          </div>
        </Tab>
        < Tab className='color' eventKey="teams" title={preview === "teams" ? <h1 className='match_priview' >Teams</h1> : <h2 className='match_priview'>Teams</h2>}>
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
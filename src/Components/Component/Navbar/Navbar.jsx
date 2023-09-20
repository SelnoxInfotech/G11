import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { React, useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
function OffcanvasExample() {
  const [Dropshow, setDropshow] = useState(false);
  const Navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])
  const toggleOffCanvas = () => {
    if (windowDimenion.winWidth <= 991)
      setShow((show) => !show);
  };
  function hrefFunction() {
    window.location.href = "https://t.me/+TyYoHMGT3r1jMjM1";
  }
  function href() {
    Navigate("/")
  }



const showDropdown = (e)=>{
  setDropshow(!Dropshow);
}
const hideDropdown = e => {
  setDropshow(false);
}
  return (

    <div className='sticky-top'  >
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="Nav "

        >
          <Container fluid  >
            <Nav className='brand non' ><img src="/image/G11.png" onClick={href} className=" logo_img" alt="Grand11.logo" /></Nav>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleOffCanvas} />
            <Navbar.Offcanvas

              id={`offcanvasNavbar-expand-${expand}`}

              aria-labelledby="offcanvasNavbarLabel"
              placement='end'
              show={show}
              onHide={toggleOffCanvas}

            >
              <Offcanvas.Header closeButton   >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                  <div className='row'>
                    <div className='col-12 lrftjoin' >
                      <button onClick={hrefFunction} type="button" className=" btn btn_tele"> Join Telegram </button>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="Homelink  offcanvas--menu">
                  <Link
                    onClick={toggleOffCanvas}
                    className="NavLink" to="/">Home</Link>
                  <NavLink
                    onClick={toggleOffCanvas}
                    to="/latest-match">Match</NavLink>
                  <NavLink
                    onClick={toggleOffCanvas}
                    to="/breakingnews">Breaking News</NavLink>
                  <NavLink Ipl_premier_league_2023
                    onClick={toggleOffCanvas}
                    to="/icc-cricket-world-cup-2023/">ICC World Cup 2023</NavLink >


                  <NavLink
                    onClick={toggleOffCanvas}
                    to="/about-us">About</NavLink >
                  <NavLink
                    onClick={toggleOffCanvas}
                    to="/contact-us">Contact us</NavLink >


                  <NavDropdown
                    id="nav-dropdown-example"
                    title="More"
                    show={Dropshow}
                    // onFocus={() => setDropshow(true)}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                   
                  >
                    
                   <NavLink  to="/cricket-rules-and-regulation/" active   style={{fontSize:"17px" ,margin: '0'  , display: "inline-flex",position: 'relative ',left:"10%"}}> Cricket Rules and Regulation</NavLink>
                    <NavLink  to="/cricket-players" active  style={{fontSize:"17px" ,margin: '0' ,  display: "inline-flex",position: 'relative ',left:"30%"}}>  Cricket Players</NavLink>
                    <NavLink to="/ipl_2023" active  style={{fontSize:"17px" ,margin: '0' ,  display: "flex",position: 'relative ',left:"41%", width:'fit-content'}}>IPL 2023</NavLink>
                    <NavLink  to="/cricket-news" active  style={{fontSize:"17px" ,margin: '0' , display: "flex",position: 'relative ',left:"46%", width:'fit-content'}}>News</NavLink>
                    <NavLink  to="/latest-video" active style={{fontSize:"17px" ,margin: '0' , display: "flex",position: 'relative ',left:"46%", width:'fit-content'}}>Video</NavLink>
                  
                  </NavDropdown>
                </Nav>

                <button onClick={hrefFunction} type="button" className=" btn btn_tele visibal "> Join Telegram </button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </div>

  );
}

export default OffcanvasExample;
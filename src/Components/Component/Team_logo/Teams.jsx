import Slider from "react-slick";
import { useEffect, useState, useContext } from "react";
import Team from "../../context/NewsApi"

export default function Teams() {
  const data = useContext(Team);
  const [Teamlog, SetTeamlogo] = useState([]);

  useEffect(() => {

    SetTeamlogo(data.Team)

  }, [data])

  var settings = {
   
    infinite: true,
    autoplay: false, 
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

          pauseOnHover:true,
        }
      },

      {
        breakpoint: 1178,
        settings: {
          pauseOnHover:true,
          autoplay: false, 
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          pauseOnHover:true,
          autoplay: false, 
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          pauseOnHover:true,
          autoplay: false, 
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnHover:true,
          autoplay: false, 
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 280,
        settings: {
          pauseOnHover:true,
          autoplay: false, 
          slidesToShow: 1,
          slidesToScroll: 1
          , infinite: true,
        }
      }
    ]
  };

  return (

    <div className="container-fluid teams_color">
      <div className="row  ">
        <h2>Teams</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <Slider {...settings}>
            {
              Teamlog.map((data,index) => {
                return (
                  <div className="container teams_con" key={index}>
                    <div className="row teams_image_container">
                      <img className="team_img" src={`https://grand11.in/g11/${data.image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                    </div>
                    <div className="col-12  team_text">
                      <h6 >{data.name}</h6>
                    </div>
                  </div>
                );
              })
            }
          </Slider>
          <div className="row  fot_slider_teams ">
            <div className="col-12 center ">
              <p>We also have G11 Fantasy Cricket Prediction application. Download G11 app now and earn
                more profit and more money.</p>
            </div>
          </div>
        </div>
      </div>

    </div>








    // {/* <div key={data.id}>
    // <div className='Slider_w' >
    //   <div className="card"  >
    //    <div className="logo_image"> <img className="card-img-top" style={{ width: "16rem", height: "250px" , left: "15px",position: "relative"}} src={`https://grand11.in/g11/${data.image}`} alt="Card imag cap" /></div>
    //     <div className="card-body">
    //       <p className="card-text">{data.name}</p>
    //     </div>
    //   </div>
    // </div>
    // </div> */}




  )
}

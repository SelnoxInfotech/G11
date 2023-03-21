
import 'cors';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Route from "./Routing"

function App() {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Cricket Prediction",
    headline: "G11-Fantasy Cricket",
    description: "Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction.",
    image: "image/G11.png",
    datePublished: new Date("2021-09-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "G11-Fantasy Cricket Prediction for Today's Match",
      url: "https//www.grand11.in/",
    },
  }

  return (


    <>

        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>

      
 <Route></Route>
   
    </>
  );
}

export default App;

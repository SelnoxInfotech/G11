// import React from 'react';
var fs = require('fs');
var axios = require('axios')
const cheerio = require('cheerio');
const request = require('request')
const cron = require('node-cron')

var run = 0
async function generateSitemap() {
  let h = []
  let g = []

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
    axios.get(`https://grand11.in/g11/all_matches_api.php`,).then((respones) => {
    // console.log(respones.data.reverse().slice(0,1))
    const  j = respones.data.reverse()
    j?.slice(0,700).map((matchdata) => {
      console.log(matchdata)

        request(`https://grand11.in/g11/api/page/match_details/${matchdata.id}`, (error, daeta, html) => {
          console.log(html , matchdata)
          try {
            const $ = cheerio?.load(html);

            $('p')?.each((index, element) => {
              if (index === 0) {
                h.push({ url1: modifystr($(element)?.text().replace($(element)?.text().slice(0,$(element)?.text().indexOf(":") + 1), "")), id: matchdata.id , title:matchdata.title })

                // console.log(modifystr($(element)?.text().replace($(element)?.text().slice(0,$(element)?.text().indexOf(":") + 1), "")))
              }
              console.log(h)
              const sitemapXmlmatchPrivew = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                   ${h.map((url) => `
                            <url>
                             <loc>https://g11prediction.com/latest-match/cricket-prediction/match-preview/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
                            <changefreq>daily</changefreq>
                              <priority>0.7</priority>
                            </url>
                     `).join('')}
                      </urlset>`;
              fs.writeFileSync('../public/sitemap/sitemapmatchpreview.xml', sitemapXmlmatchPrivew);

              const sitemapTeamguide = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
               ${h.map((url) => `
                        <url>
                         <loc>https://g11prediction.com/latest-match/cricket-prediction/team-guide/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
                        <changefreq>daily</changefreq>
                          <priority>0.7</priority>
                        </url>
                 `).join('')}
                  </urlset>`;
              fs.writeFileSync('../public/sitemap/sitemapteamguide.xml', sitemapTeamguide);

              const sitemapcheatsheet = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
           ${h.map((url) => `
                    <url>
                     <loc>https://g11prediction.com/latest-match/cricket-prediction/cheat-sheet/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
                    <changefreq>daily</changefreq>
                      <priority>0.7</priority>
                    </url>
             `).join('')}
              </urlset>`;
              fs.writeFileSync('../public/sitemap/sitemapcheatsheet.xml', sitemapcheatsheet);

              const sitemapteanm = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
               ${h.map((url) => `
                        <url>
                         <loc>https://g11prediction.com/latest-match/cricket-prediction/teams/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
                        <changefreq>daily</changefreq>
                          <priority>0.7</priority>
                        </url>
                 `).join('')}
                  </urlset>`;
              fs.writeFileSync('../public/sitemap/sitemapteam.xml', sitemapteanm);
              // run = 0
  // console.log("mathprive")
            })
          } catch (error) {
            console.trace(error)
            // run = 0
          }
        });

      })
    })


  

//   axios.get(`https://www.g11fantasy.com/NewsSection/Get-News/1`).then((respones) => {

//     const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${respones.data.map((url) => `
//       <url>
//         <loc>https://g11prediction.com/cricket-breaking-news/${modifystr(url?.urlslug !== null ? url?.urlslug.toLowerCase() : "")}/${url.id}</loc>
//         <changefreq>daily</changefreq>
//         <priority>0.7</priority>
//       </url>
//     `).join('')}
//   </urlset>`;
  
//     console.log("breaking")
//       fs.writeFileSync('../public/sitemap/sitemapBreakingnews.xml', sitemapXml);
//       console.log("File written successfully");
//       // run = 0
//   }).catch((error)=>{
//  console.trace(error)
//   })
  
 

  //  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  // <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //   ${respones.data.map((url) => `
  //     <url>
  //       <loc>https://www.weedx.io/products/${url.name.replace(/%20| /g, "-").toLowerCase()}/${url.id}</loc>
  //       <changefreq>daily</changefreq>
  //       <priority>0.7</priority>
  //     </url>
  //   `).join('')}
  // </urlset>`;

  // Write the sitemap XML to a file
  // fs.writeFileSync('../public/sitemap/sitemapmatch.xml', sitemapXml);
  // })



}


// cron.schedule("*/1 * * * *  ", function () {
  // if (run === 0) {
    generateSitemap();
    // run = 1
    // console.log("running a task every 1 seconds");
  // }

// });
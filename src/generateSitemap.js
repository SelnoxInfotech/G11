// import React from 'react';
var fs = require('fs');
const jsdom = require("jsdom");
var axios = require('axios')
const cron = require("node-cron");
const cheerio = require('cheerio');
const request = require('request')
async function generateSitemap() {
  let h = []
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
    respones.data.map((data) => {

      request(`https://grand11.in/g11/api/page/match_details/${data.id}`, (error, daeta, html) => {
        try {
          const $ = cheerio?.load(html);

          $('p')?.each((index, element) => {
            if (index === 0) {
              h.push({ url1: $(element)?.text(), id: data.id , title:data.title })

            }
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
          })
        } catch (error) {
          console.log(error)
        }
      });

    })
  })
console.log("kkkkkkkkkkk")


  // request(`https://grand11.in/g11/api/page/match_details/${data.id}`, (error, data, html) => {
  //   const $ = cheerio.load(html);
  //   var h = []
  //   $('p').each((index, element) => {
  //     if (index === 0) {
  //       // console.log(index ,  $(element).text())
  //       h.push(...$(element).text())
  //       console.log(h)
  //     }

  //       const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  // <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //   ${h.map((url) => `
  //     <url>
  //       <loc>https://www.weedx.io/products/${url}</loc>
  //       <changefreq>daily</changefreq>
  //       <priority>0.7</priority>
  //     </url>
  //   `).join('')}
  // </urlset>`;
  // fs.writeFileSync('../public/sitemap/sitemapmatch.xml', sitemapXml);
  // });
  // })
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
//  cron.schedule("*/15 * * * *",  function () {
   generateSitemap();
  // console.log("running a task every 60 seconds");
// });
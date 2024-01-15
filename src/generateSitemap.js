// import React from 'react';
var fs = require('fs');
var axios = require('axios')
const cheerio = require('cheerio');
const request = require('request')
const cron = require('node-cron')
const RSS = require('rss');
var run = 0
async function generateSitemap() {
  let h = []
  let g = []

  function modifystr(str) {
    console.log(typeof str, " ffff")
    str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    str = str.trim().replace(' ', "-");
    let a = 0;
    while (a < 1) {
      if (str.includes("--")) {
        str = str.replace("--", "-")
      } else if (str.includes("//")) {
        str = str.replace("//", "/")
      } else if (str.includes("//")) {
        str = str.replace("-/", "/")
      } else if (str.includes("//")) {
        str = str.replace("/-", "/")
      } else {
        a++
      }
    }

    return str
  }
  // axios.get(`https://grand11.in/g11/all_matches_api.php`,).then((respones) => {
  //   // console.log(respones.data.reverse().slice(0,1))
  //   const j = respones.data.reverse()
  //   j?.slice(0, 1000).map((matchdata) => {
  //     console.log(matchdata)

  //     request(`https://grand11.in/g11/api/page/match_details/${matchdata.id}`, (error, daeta, html) => {
  //       console.log(html, matchdata)
  //       try {
  //         const $ = cheerio?.load(html);

  //         $('p')?.each((index, element) => {
  //           if (index === 0) {
  //             h.push({ url1: modifystr($(element)?.text().replace($(element)?.text().slice(0, $(element)?.text().indexOf(":") + 1), "")), id: matchdata.id, title: matchdata.title })

  //             // console.log(modifystr($(element)?.text().replace($(element)?.text().slice(0,$(element)?.text().indexOf(":") + 1), "")))
  //           }
  //           console.log(h)
  //           const sitemapXmlmatchPrivew = `<?xml version="1.0" encoding="UTF-8"?>
  //               <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //                  ${h.map((url) => `
  //                           <url>
  //                            <loc>https://g11prediction.com/latest-match/cricket-prediction/match-preview/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
  //                           <changefreq>daily</changefreq>
  //                             <priority>0.7</priority>
  //                           </url>
  //                    `).join('')}
  //                     </urlset>`;
  //           fs.writeFileSync('../public/sitemap/sitemapmatchpreview.xml', sitemapXmlmatchPrivew);

  //           const sitemapTeamguide = `<?xml version="1.0" encoding="UTF-8"?>
  //           <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //              ${h.map((url) => `
  //                       <url>
  //                        <loc>https://g11prediction.com/latest-match/cricket-prediction/team-guide/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
  //                       <changefreq>daily</changefreq>
  //                         <priority>0.7</priority>
  //                       </url>
  //                `).join('')}
  //                 </urlset>`;
  //           fs.writeFileSync('../public/sitemap/sitemapteamguide.xml', sitemapTeamguide);

  //           const sitemapcheatsheet = `<?xml version="1.0" encoding="UTF-8"?>
  //       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //          ${h.map((url) => `
  //                   <url>
  //                    <loc>https://g11prediction.com/latest-match/cricket-prediction/cheat-sheet/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
  //                   <changefreq>daily</changefreq>
  //                     <priority>0.7</priority>
  //                   </url>
  //            `).join('')}
  //             </urlset>`;
  //           fs.writeFileSync('../public/sitemap/sitemapcheatsheet.xml', sitemapcheatsheet);

  //           const sitemapteanm = `<?xml version="1.0" encoding="UTF-8"?>
  //           <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //              ${h.map((url) => `
  //                       <url>
  //                        <loc>https://g11prediction.com/latest-match/cricket-prediction/teams/${modifystr(url.title.toLowerCase())}/${modifystr(url.url1.replace(url.url1.slice(0, url.url1.indexOf(":") + 1), "")).toLowerCase()}/${url.id}</loc>
  //                       <changefreq>daily</changefreq>
  //                         <priority>0.7</priority>
  //                       </url>
  //                `).join('')}
  //                 </urlset>`;
  //           fs.writeFileSync('../public/sitemap/sitemapteam.xml', sitemapteanm);
  //           // run = 0
  //           // console.log("mathprive")
  //         })
  //       } catch (error) {
  //         console.trace(error)
  //         // run = 0
  //       }
  //     });

  //   })
  // })

  axios.get(`https://www.g11fantasy.com/NewsSection/Get-News/1`).then((respones) => {
    // console.log(respones)
    let feed = new RSS({
      title: 'Cricket Breaking News ON TRENDING TOPICS',
      description: 'Cricket Breaking News ON TRENDING TOPICS',
      feed_url: 'https://g11prediction.com/Rss/BreakingnewsRSS-feed.xml/',
      site_url: 'https://g11prediction.com/',
      image_url: 'https://g11prediction.com/image/G11.png',
      language: 'en',
      pubDate: new Date(),
    });
    respones.data.map((url) => {
      const l = dangerouslySetInnerHTML = { __html: url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "") }
      feed.item({
        title: url.Title,
        description: l['__html'],
        url: `https://g11prediction.com/cricket-breaking-news/${modifystr(url.Title)}/${url.id}`,
        date: new Date(url.created),
      });

    }).join('')
    const xml = feed.xml({ indent: true });
    fs.writeFileSync('../public/Rss/Breakingnewsrss-Feed.xml', xml, 'utf-8');
    console.log("File written successfully");
  }).catch((error) => {
    console.trace(error)
  })
  axios.get(`https://g11fantasy.com/NewsSection/FilterbySubCategory/7`).then((respones) => {
    console.log(respones)
    let feed1 = new RSS({
      title: 'IPL 2024 - Latest News & Live Updates',
      description: 'IPL 2024 - Latest News & Live Updates',
      feed_url: 'https://g11prediction.com/Rss/ipl-2024RSS-feed.xml/',
      site_url: 'https://g11prediction.com/',
      image_url: 'https://g11prediction.com/image/G11.png',
      language: 'en',
      pubDate: new Date(),
    });
    respones.data.data.map((url) => {
      const l = dangerouslySetInnerHTML = { __html: url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "") }
      feed1.item({
        title: url.Title,
        description: l['__html'],
        url: `https://g11prediction.com/ipl-2024/${modifystr(url.Title)}/${url.id}`,
        date: new Date(url.created),
      });

    }).join('')
    const xml = feed1.xml({ indent: true });
    fs.writeFileSync('../public/Rss/ipl-2024RSS-feed.xml', xml, 'utf-8');
    console.log("File written successfully");
  }).catch((error) => {
    console.trace(error)
  })

  axios.get(`https://g11fantasy.com/NewsSection/FilterbySubCategory/1`).then((respones) => {
    console.log(respones)
    let feedIpL = new RSS({
      title: 'IPL 2023 - Latest News & Live Updates',
      description: 'IPL 2023 - Latest News & Live Updates',
      feed_url: 'https://g11prediction.com/Rss/ipl-2023RSS-feed.xml/',
      site_url: 'https://g11prediction.com/',
      image_url: 'https://g11prediction.com/image/G11.png',
      language: 'en',
      pubDate: new Date(),
    });
    respones.data.data.map((url) => {
      const l = dangerouslySetInnerHTML = { __html: url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "") }
      feedIpL.item({
        title: url.Title,
        description: l['__html'],
        url: `https://g11prediction.com/ipl-2023/${modifystr(url.Title)}/${url.id}`,
        date: new Date(url.created),
      });

    }).join('')
    const xml = feedIpL.xml({ indent: true });
    fs.writeFileSync('../public/Rss/ipl-2023RSS-feed.xml', xml, 'utf-8');
    console.log("File written successfully");
  }).catch((error) => {
    console.trace(error)
  })



  axios.get(`https://g11fantasy.com/NewsSection/FilterbySubCategory/8`).then((respones) => {
    let feed2 = new RSS({
      title: 'IPL 2024 - Latest News & Live Updates',
      description: 'IPL 2024 - Latest News & Live Updates',
      feed_url: 'https://g11prediction.com/Rss/icc-cricket-world-cup-2024RSS-feed.xml/',
      site_url: 'https://g11prediction.com/',
      image_url: 'https://g11prediction.com/image/G11.png',
      language: 'en',
      pubDate: new Date(),
    });
    respones.data.data.map((url) => {
      const l = dangerouslySetInnerHTML = { __html: url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "") }
      feed2.item({
        title: url.Title,
        description: l['__html'],
        url: `https://g11prediction.com/icc-cricket-world-cup-2024/${modifystr(url.Title)}/${url.id}`,
        date: new Date(url.created),
      });

    }).join('')
    const xml = feed2.xml({ indent: true });
    fs.writeFileSync('../public/Rss/icc-cricket-world-cup-2024RSS-feed.xml', xml, 'utf-8');
    console.log("File written successfully");
  }).catch((error) => {
    console.trace(error)
  })
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

  axios.get(`https://g11fantasy.com/NewsSection/FilterbySubCategory/2`).then((respones) => {
    let feed3 = new RSS({
      title: 'IPL 2024 - Latest News & Live Updates',
      description: 'IPL 2024 - Latest News & Live Updates',
      feed_url: 'https://g11prediction.com/Rss/icc-cricket-world-cup-2023RSS-feed.xml/',
      site_url: 'https://g11prediction.com/',
      image_url: 'https://g11prediction.com/image/G11.png',
      language: 'en',
      pubDate: new Date(),
    });
    respones.data.data.map((url) => {
      const l = dangerouslySetInnerHTML = { __html: url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "") }
      feed3.item({
        title: url.Title,
        description: l['__html'],
        url: `https://g11prediction.com/icc-cricket-world-cup-2023/${modifystr(url.Title)}/${url.id}`,
        date: new Date(url.created),
      });

    }).join('')
    const xml = feed3.xml({ indent: true });
    fs.writeFileSync('../public/Rss/icc-cricket-world-cup-2023RSS-feed.xml', xml, 'utf-8');
    console.log("File written successfully");
    run = 0
  }).catch((error) => {
    console.trace(error)
  })
}

// cron.schedule("*/1 * * * *  ", function () {
// if (run === 0) {
generateSitemap();
// run = 1
// console.log("running a task every 1 seconds");
// }

// });








// let feed 
// axios.get(`https://www.g11fantasy.com/NewsSection/Get-News/1`).then((respones) => {
//   // console.log(respones)
//    feed = new RSS({
//     title: 'Cricket Breaking News ON TRENDING TOPICS',
//     description: 'Cricket Breaking News ON TRENDING TOPICS',
//     feed_url: 'https://g11prediction.com/sitemap/sitemapBreakingnewsrss-feed.xml/',
//     site_url: 'https://g11prediction.com/',
//     image_url: 'https://g11prediction.com/image/G11.png',
//     // managingEditor: 'John Doe',
//     // webMaster: 'Jane Doe',
//     language: 'en',
//     pubDate: new Date(),
//     // ttl: 60,
//   });
//    respones.data.map((url) => {
//       const l = dangerouslySetInnerHTML={__html: url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "")}
//       feed.item({
//         title: url.Title,
//         description: l['__html'],
//         url: `https://g11prediction.com/cricket-breaking-news/${modifystr(url.urlslug?.replace(/\s+/g, '-').toLowerCase())}/${url.id}`,
//         date: new Date(url.created),
//       });

//     }).join('')
    
//     const xml = feed.xml({ indent: true });
//    fs.writeFileSync('./RSS/sitemapBreakingnewsrss-Feed.xml', xml, 'utf-8');
//   console.log("File written successfully");
//   run = 0
// }).catch((error) => {
//   console.trace(error)
// })

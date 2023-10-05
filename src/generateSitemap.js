// import React from 'react';
var fs = require('fs');
const jsdom = require("jsdom");
var axios = require('axios')
const cron = require("node-cron");
async function generateSitemap() {
  axios.get(`https://grand11.in/g11/all_matches_api.php`,
  ).then((respones) => {
    axios.get(`https://grand11.in/g11/api/page/match_details/${respones.data.id}`)
    .then((res)=>{
      const data = res.data
      // const dom = new jsdom.JSDOM();
      // var doc = dom.parseFromString(data, 'text/html');
      // var parserhtm = doc.querySelectorAll('section');

      console.log(data)
    })
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
  })


}
cron.schedule("*/15 * * * * *", function () {
  generateSitemap();
  console.log("running a task every 15 seconds");
});
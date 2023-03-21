require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('../src/Routing').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://www.g11prediction.com')
          .save('./public/sitemap.xml')
  );
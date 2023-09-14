require("babel-register")({
    presets: ["es2015"],
    // ignore: ["**?*" ]

  });
// require('babel-register');
  const router = require('../src/Routing').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://g11prediction.com')
          .save('./public/sitemap.xml')
  );
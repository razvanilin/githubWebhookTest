var fs = require('fs');
var path = require('path');

module.exports = (app, route) => {

  app.post("/webhook/release", (req, res) => {
    fs.writeFile("webhookRelease.json", JSON.stringify(req.body), function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Release webhook was triggered. Check webhookRelease.json to see the results");
      }
    });
  });

  // return the Middleware
  return (req, res, next) => {
    next();
  }
}

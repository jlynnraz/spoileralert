const router = require("express").Router();
// const moviesController = require("../controllers/spoilerController");
var path = require("path");
const pug = require('pug');

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../views/html/index.html"));
    res.render('index', { user: req.user });
  });
  // routes added by matt
  app.get("/profilepage", function(req, res) {
    res.render('profilepage', { user: req.user });
  });
  app.get("/searchresults", function(req, res) {
    res.render('searchresults', { user: req.user });
  });
  app.get("/thespoils", function(req, res) {
    res.render('thespoils', { user: req.user });
  });
  app.get("/newuser", function(req, res) {
    res.render('newUser', { user: req.user });
  });

  // cms route loads cms.html
  app.get("/posts", function(req, res) {
    //res.sendFile(path.join(__dirname, "../views/html/index.html"));
    res.render('index', { user: req.user });
  });

};
var db = require("../models");
var questions = require("../public/js/questions")

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login", {});
  })
  // Load index page
  app.get("/login", function (req, res) {
    console.log(req.body);
    res.render("login", {});
  });

  app.get("/members", function(req, res) {
    res.render('members', {});
  })

  app.get("/game/category/animals", function(req, res) {
    res.render('game', {questions: [...questions.category.animals], category: "animals"});
  })
  app.get("/game/category/movies", function(req, res) {
    res.render('game', {questions: [...questions.category.movies], category: "movies"});
  })
  app.get("/game/category/sports", function(req, res) {
    res.render('game', {questions: [...questions.category.sports], category: "sports"});
  })
  app.get("/game/category/music", function(req, res){
    res.render('game', {questions: [...questions.category.music], category: "music"});
  })
  app.get("/game/category/geography", function(req, res){
    res.render('game', {questions: [...questions.category.geography], category: "geography"});
  })



  app.get("/signup", function (req, res) {
    res.render("signup", {});
  });
  app.get("/boards", function (req, res) {
    res.render("boards", {});
  });

  app.get("/questions", function (req, res) {
    res.render("questions", {});
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

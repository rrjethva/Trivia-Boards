var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login", {});
  })
  // Load index page
  app.get("/login", function (req, res) {
    console.log(req.body);
    res.render("login", {});
  });

  // app.get("/members", function (req, res) {
  //   res.render("members", {});
  // });

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

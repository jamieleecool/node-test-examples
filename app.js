// Generated by CoffeeScript 1.5.0

/*
Module dependencies.
*/


(function() {
  var app, express, http, routes;

  express = require("express");

  routes = require("./routes");

  http = require("http");

  app = express();

  app.configure(function() {
    app.set("port", process.env.PORT || 3000);
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express["static"](__dirname + "/public"));
  });

  app.configure("development", function() {
    app.use(express.logger("dev"));
    return app.use(express.errorHandler());
  });

  app.get("/", routes.index);

  app.post("/submit", routes.submit);

  http.createServer(app).listen(app.get("port"), function() {
    return console.log("Express server listening on http://localhost:" + app.get("port"));
  });

}).call(this);

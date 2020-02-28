var express = require("express");
var router = express.Router();

/* GET About page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "This page is about me" });
});

module.exports = router;

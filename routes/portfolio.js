var express = require("express");
var router = express.Router();

/* GET Portfolio page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Portfolio" });
});

module.exports = router;

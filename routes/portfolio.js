var express = require("express");
var router = express.Router();

const breakpoint = "1024px";
const pics = [
  [
    "/images/Mobile/Mobile-Image-One.jpg",
    "/images/Desktop/Desktop-Image-One.jpg"
  ],
  [
    "/images/Mobile/Mobile-Image-Two.jpg",
    "/images/Desktop/Desktop-Image-Two.jpg"
  ],
  [
    "/images/Mobile/Mobile-Image-Three.jpg",
    "/images/Desktop/Desktop-Image-Three.jpg"
  ]
];

/* GET Portfolio page. */
router.get("/", function(req, res, next) {
  res.render("portfolio", { title: "Portfolio", pics, breakpoint });
});

module.exports = router;

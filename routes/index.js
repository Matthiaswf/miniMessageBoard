const express = require("express");
const router = express.Router();

//get the index page
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;

const express = require("express");
const router = express.Router();

//messages array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

//get the index page
router.get("/", (req, res, next) => {
  res.render("index", { messages: messages });
});

module.exports = router;

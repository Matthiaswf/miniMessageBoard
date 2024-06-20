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
//get the new page
router.get("/new", (req, res, next) => {
  res.render("form");
});

//post the new message
router.post("/new", (req, res, next) => {
  const user = req.body.user;
  const text = req.body.text;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;

const express = require("express");
const app = express();

app.set("view engine", "ejs");

const mainRouter = require("./routes/index");

app.use("/", mainRouter);

app.listen(3000);

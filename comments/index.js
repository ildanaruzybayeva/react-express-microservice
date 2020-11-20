const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const { randomBytes } = require("crypto");

const comments = {};

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.post("/posts", (req, res) => {
  res.send("hi from comments");
});

app.listen(4001, () => console.log("listening on 4001"));

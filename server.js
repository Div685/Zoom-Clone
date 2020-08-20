const express = require("express");
const app = express();
const server = require("http").Server(app);

app.get("/", (req, res) => {
  res.status(200).send("hello World");
});

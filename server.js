const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "html")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "index.html"));
});

app.listen(1414, () => {
  console.log("Express App on port 1414!");
});

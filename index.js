const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    mssge: "this is home route",
  });
});

app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.send(`my name is ${name}`);
});

app.listen(8000);

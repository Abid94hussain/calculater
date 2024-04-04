const express = require("express");
const app = express();
const ports = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(ports, () => {
  console.log(`App is listing on port : `, ports);
});

app.get("/calculater", (req, res) => {
  res.render("mainfile/index.ejs");
});

app.patch("/formdata", (req, res) => {
  let data = req.body;
  console.log(data);
  res.render("mainfile/formdata.ejs", { data });
});

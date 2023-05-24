const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes");

app.set("view engine", "ejs");

app.use(routes);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`the app is listeing on port ${port}`);
});

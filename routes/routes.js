const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const date = new Date();
  const hours = date.getHours();
  const days = date.getDay();
  if (days >= 1 && days <= 5 && hours >= 9 && hours <= 17) {
    res.render("homepage");
  } else {
    res.render("closepage");
  }
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/service", (req, res) => {
  res.render("Ourservices");
});
module.exports = router;

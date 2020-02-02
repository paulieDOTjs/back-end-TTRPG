const express = require("express");
const router = express.Router();

// Load Game model
const Maps = require("../../models/Maps");

router.post("/", (req, res) => {
  console.log(req.body);
  Maps.create(req.body).then(Map => {
    res.json(Map);
  });
});

router.get("/", (req, res) => {
  console.log(req.body);
  Maps.find({}).then(Map => {
    res.json({ Map });
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();

// Load Game model
const Maps = require("../../models/Maps");

router.post("/", (req, res) => {
  console.log(req.body);
  Maps.create(req.body).then(MapData => {
    res.json(MapData);
  });
});

router.get("/", (req, res) => {
  console.log(req.body);
  Maps.find({}).then(MapData => {
    res.json({ MapData });
  });
});

router.get("/public", (req, res) => {
  console.log(req.body);
  Maps.find({ private: false }).then(MapData => {
    console.log(MapData);
    res.json({ MapData });
  });
});

module.exports = router;

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
  Maps.find({}).then(MapData => {
    console.log(MapData);
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

router.get("/id/:id", (req, res) => {
  console.log(req.params.id);
  Maps.find({ _id: req.params.id }).then(MapData => {
    console.log(MapData);
    res.json({ MapData });
  });
});

router.delete("/id/:id", (req, res) => {
  console.log(req.params.id);
  Maps.findByIdAndRemove(req.params.id).then(MapData => {
    console.log(MapData);
    res.json({ MapData });
  });
});

router.get("/user/:user", (req, res) => {
  console.log(req.params.user);
  Maps.find({ savedBy: req.params.user }).then(MapData => {
    console.log(MapData);
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

const axios = require("axios");
const router = require("express").Router();
const Topics = require("../models/topics");

// get all ("/api/")
router.get("/", (req, res) => Topics.find({}).then(dbTopic => res.json(dbTopic)));

// get one ("/api/:topic")
// router.get("/:topic", (req, res) => Topics.find({topic: req.params.topic}).then(dbTopic => res.json(dbTopic)));

module.exports = router;
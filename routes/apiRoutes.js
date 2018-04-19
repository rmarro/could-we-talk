const axios = require("axios");
const router = require("express").Router();
const Topics = require("../models/topics");

// read one
router.get("/:topic", (req, res) => Topics.find({topic: req.params.topic}).then(dbTopic => console.log(dbTopic.subtopics)));

module.exports = router;
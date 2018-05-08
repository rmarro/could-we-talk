const axios = require("axios");
const router = require("express").Router();
const Topics = require("../models/topics");
const User = require("../models/users");

// get all ("/api/")
router.get("/", (req, res) => Topics.find({}).then(dbTopic => res.json(dbTopic)));

// add user's initials, key, and full state as a new user
router.post("/user", (req, res) => User.create(req.body)
    .then(function(dbUser) {
        res.json(dbUser);
    })
    .catch(function(err) {
        res.json(err);
    })
)

// find user entries with same key
router.get("/user/:key", (req, res) => User.find({key: req.params.key})
    .then(function(dbUsers) {
        res.json(dbUsers);
    })
    .catch(function(err) {
        res.json(err)
    })
)



// get one ("/api/:topic")
// router.get("/:topic", (req, res) => Topics.find({topic: req.params.topic}).then(dbTopic => res.json(dbTopic)));

module.exports = router;
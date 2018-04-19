const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    topic: {
        type: String
    },
    subtopics: [
        {
            type: String
        }
    ]
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;
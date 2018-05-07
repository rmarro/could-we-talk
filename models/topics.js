const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    topic: {
        type: String
    },
    num: {
        type: Number
    },
    subtopics: [
        {
            name: {
                type: String
            },
            description: {
                type: String
            },
            talk: {
                type: Boolean
            },
            questions: {
                type: String
            },
            starter: {
                type: String
            },
            ideas: [
                {
                    type: String
                }
            ]
        }
    ],
    resources: [
        {
            type: String
        }
    ]
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;
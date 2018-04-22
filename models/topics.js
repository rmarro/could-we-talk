const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    topic: {
        type: String
    },
    subtopics: [
        {
            name: {
                type: String
            },
            description: {
                type: String
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
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    key: {
        type: String
    },
    initials: {
        type: String
    },
    topics: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
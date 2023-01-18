const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    topic: {
        type: String
    },
    Problem: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('questions', QuestionSchema);
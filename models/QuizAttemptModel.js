const mongoose = require('mongoose');
require('../mongo');

const QuizAttemptsSchema = new mongoose.Schema({
    question:       { type: String, trim: true, index: true, required: true},
    selectedOptions:{ type: [], required: true, index: true },
    topicId:        { type: mongoose.Types.ObjectId, ref: "mtopics", required: true },
    quizId:         { type: mongoose.Types.ObjectId, ref: "quizs", required: true },
    studentId:      { type: mongoose.Types.ObjectId, ref: "students", required: true },
    studentScore:   { type: String, required: true }
},{
    timestamps: true
});

var QuizAttemptsModel = mongoose.model('quizattempts', QuizAttemptsSchema);
module.exports = QuizAttemptsModel;
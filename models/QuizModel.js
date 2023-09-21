const mongoose = require('mongoose');
require('../mongo');

const QuizSchema = new mongoose.Schema({
    question:       { type: String, trim: true, index: true, required: true},
    options:        { type: [], required: true, index: true },
    noOfQuestions:  { type: Number, required: true },
    boardId:        { type: mongoose.Types.ObjectId, ref: "mboards", required: true },
    gradeId:        { type: mongoose.Types.ObjectId, ref: "mgrades", required: true },
    subjectId:      { type: mongoose.Types.ObjectId, ref: "msubjects", required: true },
    chapterId:      { type: mongoose.Types.ObjectId, ref: "mchapters", required: true },
    topicId:        { type: mongoose.Types.ObjectId, ref: "mtopics", required: true }
},{
    timestamps: true
});

var QuizModel = mongoose.model('quizs', QuizSchema);
module.exports = QuizModel;
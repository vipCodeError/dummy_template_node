const mongoose = require('mongoose');
require('../mongo');

const RewardSchema = new mongoose.Schema({
    topicId:        { type: mongoose.Types.ObjectId, ref: "mtopics", required: true },
    quizId:         { type: mongoose.Types.ObjectId, ref: "quizs", required: true },
    studentId:      { type: mongoose.Types.ObjectId, ref: "students", required: true },
    points:         { type: Number, required: true }
},{
    timestamps: true
});

var RewardModel = mongoose.model('rewards', RewardSchema);
module.exports = RewardModel;
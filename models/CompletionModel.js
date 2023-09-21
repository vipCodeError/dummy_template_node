const mongoose = require('mongoose');
require('../mongo');

const CompletionSchema = new mongoose.Schema({
    studentId:      { type: mongoose.Types.ObjectId, trim: true, index: true, required: true, ref:"students"},
    chapterId:      { type: mongoose.Types.ObjectId, required: true, trim: true, index: true, ref:"mchapters" },
    topicId:        { type: [mongoose.Types.ObjectId], required: true, trim: true, index: true },
    totalTopics:    { type: Number, index: true, required: true, ref: "msubjects" },
    subjectName:    { type: String, required: true },
    subjectId:      { type: mongoose.Types.ObjectId, required: true, trim: true, index: true },
    completionPercentage: { type: Number, index: true, required: true },
},{
    timestamps: true
})
var CompletionModel = mongoose.model('testCompletions', CompletionSchema);
module.exports = CompletionModel;
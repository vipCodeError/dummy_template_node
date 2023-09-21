const mongoose = require('mongoose');
require('../mongo');

const WishListSchema = new mongoose.Schema({
    studentId:  { type: mongoose.Types.ObjectId, ref: "students", required: true, index: true },
    chapterId:  { type: mongoose.Types.ObjectId, ref: "mchapters", required: true, index: true },
    subjectId:  { type: mongoose.Types.ObjectId, ref: "msubjects", required: true, index: true },
    gradeId:    { type: mongoose.Types.ObjectId, ref: "mgrades", required: true, index: true },
    boardId:    { type: mongoose.Types.ObjectId, ref: "mboards", required: true, index: true },
    topicId:    { type: mongoose.Types.ObjectId, ref: "mtopics", required: true, index: true },
},{
    timestamps: true
})
var WishListModel = mongoose.model('wishLists', WishListSchema);
module.exports = WishListModel;
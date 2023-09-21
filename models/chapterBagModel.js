const mongoose = require('mongoose');
require('../mongo');

const bagSchema = new mongoose.Schema({
    studentId:      { type: mongoose.Types.ObjectId, trim: true, index: true, required: true, ref:"students"},
    chapterId:      { type: mongoose.Types.ObjectId, required: true, trim: true, index: true, ref:"mchapters" },
    subjectId:      { type: mongoose.Types.ObjectId, required: true, trim: true, index: true, ref:"msubjects" },
},{
    timestamps: true
})
var bagModel = mongoose.model('chapterbag', bagSchema);
module.exports = bagModel;
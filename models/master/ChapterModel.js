const mongoose = require('mongoose');
require('../../mongo');

const ChapterSchema = new mongoose.Schema({
    boardId:    { type: mongoose.Schema.ObjectId, ref: 'mboards', required: true, index: true },
    subjectId:  { type: mongoose.Schema.ObjectId, ref: 'msubjects', required: true, index: true },
    gradeId:    { type: mongoose.Schema.ObjectId, ref: 'mgrades', required: true, index: true },
    name:       { type: String, trim: true, index: true },
    status:     { type: Boolean, default: true },
    icon:       { type: Array, trim: true, default: null},
    mrp:        { type: Number, default: 0 },
    offeringPrice: { type: Number, default: 0 }, 
    priority:   { type: Number, default: 0 },
    createdBy:  { type: mongoose.Schema.ObjectId, ref: 'users', default: null }
},{
    timestamps: true
})
var ChapterModel = mongoose.model('mchapters', ChapterSchema);
module.exports = ChapterModel;
const mongoose = require('mongoose');
require('../../mongo');

const TopicSchema = new mongoose.Schema({
    boardId:    { type: mongoose.Schema.ObjectId, ref: 'mboards', required: true, index: true },
    gradeId:    { type: mongoose.Schema.ObjectId, ref: 'mgrades', required: true, index: true },
    subjectId:  { type: mongoose.Schema.ObjectId, ref: 'msubjects', required: true, index: true },
    chapterId:  { type: mongoose.Schema.ObjectId, ref: 'mchapters', required: true, index: true },
    name:       { type: String, trim: true, index: true },
    status:     { type: Boolean, default: true },
    icon:       { type: Array, trim: true, default: null},
    priority:   { type: Number, default: 0 },
    file:       { type: String, trim: true, required: true },
    isFeatured: { type: Boolean, default: false }, 
    tags:       { type: String, default: null },
    image:      { type: String, default: null },
    deepLink:   { type: String, default: null },
    createdBy:  { type: mongoose.Schema.ObjectId, ref: 'users', default: null }
},{
    timestamps: true
})
var TopicModel = mongoose.model('mtopics', TopicSchema);
module.exports = TopicModel;
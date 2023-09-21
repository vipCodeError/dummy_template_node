const mongoose = require('mongoose');
require('../../mongo');

const SubjectSchema = new mongoose.Schema({
    boardId:    { type: mongoose.Schema.ObjectId, ref: 'mboards', required: true, index: true },
    gradeId:    { type: mongoose.Schema.ObjectId, ref: 'mgrades', required: true, index: true },
    name:       { type: String, trim: true, index: true },
    status:     { type: Boolean, default: true },
    priority:   { type: Number, default: 0 },
    icon:       { type: Array, trim: true, default: null},
    createdBy:  { type: mongoose.Schema.ObjectId, ref: 'users', default: null }
},{
    timestamps: true
})
var SubjectModel = mongoose.model('msubjects', SubjectSchema);
module.exports = SubjectModel;
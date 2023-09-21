const mongoose = require('mongoose');
require('../../mongo');

const GradeSchema = new mongoose.Schema({
    boardId:    { type: mongoose.Schema.ObjectId, ref: 'mboards', required: true, index: true },
    name:       { type: String, trim: true, index: true },
    status:     { type: Boolean, default: true },
    icon:       { type: Array, trim: true, default: null, index: true },
    priority:   { type: Number, default: 0 },
    createdBy:  { type: mongoose.Schema.ObjectId, ref: 'users', default: null, index: true }
},{
    timestamps: true
})
var GradeModel = mongoose.model('mgrades', GradeSchema);
module.exports = GradeModel;
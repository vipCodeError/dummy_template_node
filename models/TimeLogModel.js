const mongoose = require('mongoose');
require('../mongo');

const TimeLogSchema = new mongoose.Schema({
    studentId:      { type: mongoose.Types.ObjectId, ref: "students", trim: true, index: true, required: true},
    topicId:        { type: mongoose.Types.ObjectId, ref: "mtopics", trim: true, index: true, required: true },
    timePaused:     { type: Number, index: true, required: true }
},{
    timestamps: true
})
var TimeLogModel = mongoose.model('topictimelogs', TimeLogSchema);
module.exports = TimeLogModel;
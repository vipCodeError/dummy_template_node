const mongoose = require('mongoose');
require('../mongo');

const StatisticsSchema = new mongoose.Schema({
    studentId:          { type: mongoose.Types.ObjectId, ref: "students", index: true, required: true },
    compareDate:        { type: String, required: true },
    statDate:           { type: Date, required: true, index: true },
    totalTimeInMinutes: { type: Number, default: 0 },
    morningMinutes:     { type: Number, default: 0 },
    afternoonMinutes:   { type: Number, default: 0 },
    eveningMinutes:     { type: Number, default: 0 }
},{
    timestamps: true
});

var StatisticsModel = mongoose.model('statistics', StatisticsSchema);
module.exports = StatisticsModel;
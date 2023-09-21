const mongoose = require('mongoose');
require('../mongo');

const PlanSchema = new mongoose.Schema({
    period:     { type: String, trim: true, index: true, default: null},
    interval:   { type: Number, trim: true, index: true, required: true },
    name:       { type: String, index: true, default: null },
    amount:     { type: Number, trim: true, default: null},
    currency:   { type: String, default: "INR"},
    description:{ type: String, default: null},
    paymentLog: { type: [], default: null},
    boardId:    { type: mongoose.Types.ObjectId, ref: "mboards", required: true },
    gradeId:    { type: mongoose.Types.ObjectId, ref: "mgrades", required: true },
    planId:     { type: String, required: true },
    status:     { type: Boolean, default: true}
},{
    timestamps: true
})
var PlanModel = mongoose.model('plans', PlanSchema);
module.exports = PlanModel;
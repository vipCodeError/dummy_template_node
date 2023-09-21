const mongoose = require('mongoose');
require('../mongo');

const PaymentHistory = new mongoose.Schema({
    studentId:      { type: mongoose.Types.ObjectId, trim: true, index: true, required: true, ref:"students"},
    amount:     { type: Number,  default: null},    
    payload:     { type: [], default: null},
    paymentId:      { type: String,   default: null },
    planId:   { type: String, default: null },
    subscriptionId:{ type: String, default: null }
    
},{
    timestamps: true
})
var PaymentModel = mongoose.model('paymentHistory', PaymentHistory);
module.exports = PaymentModel;
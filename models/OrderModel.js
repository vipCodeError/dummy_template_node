const mongoose = require('mongoose');
require('../mongo');

const PaymentSchema = new mongoose.Schema({
    studentId:      { type: String, trim: true, index: true, required: true},
    chapterId:      [{ type: mongoose.Types.ObjectId, required: true, trim: true, index: true }],
    chapterDetails: [{ type: [], index: true }],
    paidAmount:     { type: Number, index: true, default: null},
    paymentId:      { type: String, required: true },
    paymentStatus:  { type: String, required: true },
    orderId:        { type: String, required: true }
},{
    timestamps: true
})
var PaymentModel = mongoose.model('payments', PaymentSchema);
module.exports = PaymentModel;
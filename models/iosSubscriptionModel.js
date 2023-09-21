const mongoose = require('mongoose');
require('../mongo');

const iosSchema = new mongoose.Schema({
    studentId:      { type: mongoose.Types.ObjectId, trim: true, index: true},
    transactionId:  { type: String, trim: true, index: true, required: true },
    status:         { type: String, index: true, default: null },
    paymentResponse:{ type: String, trim: true, default: null},
    expiryDate:     { type: Date, trim: true, default: null}
},{
    timestamps: true
})
var iosModel = mongoose.model('ios_subscriptions', iosSchema);
module.exports = iosModel;
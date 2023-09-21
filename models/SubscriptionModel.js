const mongoose = require('mongoose');
require('../mongo');

const SubscriptionSchema = new mongoose.Schema({
    studentId:{ type: mongoose.Types.ObjectId, trim: true, index: true, required: true, ref:"students"},
    status:  { type: String, default: "Active" },
    expiry_date: { type: String, index: true, default: null }
},{
    timestamps: true
})
var subscriptionModel = mongoose.model('Subscriptions', SubscriptionSchema);
module.exports = subscriptionModel;
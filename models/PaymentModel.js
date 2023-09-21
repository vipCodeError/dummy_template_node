const mongoose = require('mongoose');
require('../mongo');
const PaymentSchema = new mongoose.Schema({
    studentId:          { type: mongoose.Types.ObjectId, trim: true, index: true, required: true, ref:"students"},
    studentDetails:     { type: [], default: {}},
    subjectId:          { type: mongoose.Types.ObjectId, trim: true, index: true,  default:null, ref:"msubjects"},
    chapterId:          { type: [mongoose.Types.ObjectId], required: true, trim: true, index: true },
    chapterDetails:     { type: [], default:[] },
    paidAmount:         { type: Number,  default: null},
    paymentId:          { type: String,   default: null },
    paymentStatus:      { type: String, default: "pending" },
    pointsRedeemed:     { type: Number, default: 0 },
    referralInfo:       { type: [], default: [] },
    orderId:            { type: String,  default: null },
    referralCode:       { type: String,  default: null },
    paymentGateway:     { type: [],  default: [] },
    planId:             { type: String, default: null },
    subscriptionId:     { type: String,  default: null },
    is_subscription:    { type: Boolean, default: 0 },
    start_date:         { type: Date, index: true, default: null },
    expiry_date:        { type: Date, index: true, default: null },
    status:             { type: String,   enum : ['Active','Deactive',"Cancelled"], default: 'Deactive'},
    subscription_link:  { type: String,  default: null },
    couponCode:         { type: String, default: null },
    couponDiscount:     { type: Number, default: 0 }
},
{
    timestamps: true
})
var PaymentModel = mongoose.model('payments', PaymentSchema);
module.exports = PaymentModel;
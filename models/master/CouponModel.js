const mongoose = require('mongoose');
require('../../mongo');

const CouponSchema = new mongoose.Schema({
    title:          { type: String, required: true },
    description:    { type: String, required: true },
    code:           { type: String, trim: true, index: true },
    threshold:      { type: Number, required: true },
    discount:       { type: Number, trim: true, default: null, index: true },
    limitAccess:    { type: Number, default: 0 },
    pendingLimit:   { type: Number, default: 0 },
    couponType:     { type: String, default: "discount" },
    accessType:     { type: String, trim: true, index: true },
    startDate:      { type: Date, default: null },
    endDate:        { type: Date, default: null },
    status:         { type: Boolean, default: false, index: true }
},{
    timestamps: true
})
var CouponModel = mongoose.model('coupons', CouponSchema);
module.exports = CouponModel;
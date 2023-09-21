const mongoose = require('mongoose');
require('../mongo');

const commissionSchema = new mongoose.Schema({
    teacherId:  { type: mongoose.Types.ObjectId, trim: true, index: true, required: true, ref:"teachers"},
    amount:     { type: Number, required: true, trim: true, index: true },
    status:     { type: String, default: "pending" },
    responseInfo: { type: [], default: []}  
},{
    timestamps: true
})
var commissionModel = mongoose.model('commissions', commissionSchema);
module.exports = commissionModel;
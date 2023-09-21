const mongoose = require('mongoose');
require('../mongo');

const StudentSchema = new mongoose.Schema({
    name:       { type: String, trim: true, index: true, default: null},
    email:      { type: String, trim: true, index: true, default: null },
    phone:      { type: String, index: true, default: null,},
    country:    { type: String, index: true, default: null},
    pincode:    { type: Number, default: null },
    parentEmail:{ type: String, default: null },
    uniqueCode: { type: String, default: null },
    school:     { type: String, default: null },
    password:   { type: String, trim: true, default: null},
    address:    { type: String, default: null },
    gender:     { type: String, default: null },
    profile:    { type: String, trim: true, default: null, },
    boardId:    { type: mongoose.Types.ObjectId, ref: "mboards", default: null, index: true },
    gradeId:    { type: mongoose.Types.ObjectId, ref: "mgrades", default: null, index: true },
    referralCode: { type: String, default: null },
    planType:   { type: String, default: null },
    loginMode:  { type: String, default: null },
    rewardPoints: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false},
    isAdmin:    { type: Boolean, default: false},
    startDate:  { type: Date, default: null },
    endDate:    { type: Date, default: null },
},{
    timestamps: true
})
var StudentModel = mongoose.model('students', StudentSchema);
module.exports = StudentModel;
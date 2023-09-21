const mongoose = require('mongoose');
require('../mongo');

const TeacherSchema = new mongoose.Schema({
    name:       { type: String, trim: true, index: true, required: true},
    email:      { type: String, trim: true, index: true },
    phone:      { type: String, index: true },
    password:   { type: String, trim: true, default: null},
    address:    { type: String, default: null },
    loginMode:  { type: String, trim: true, required: true },
    profile:    { type: String, trim: true, default: null },
    approvalStatus: { type: String, default: "pending"},
    uniqueCode: { type: String, required: true },
    accountNo:  { type: Number, trim: true, default: null },
    bankName:   { type: String, trim: true, default: null },
    accountName:{ type: String, trim: true, default: null },
    ifscCode:   { type: String, trim: true, default: null },
    panCard:    { type: String, default: null },
    gstNumber:  { type: String, default: null },
    isDeleted: { type: Boolean, default: false}
},{
    timestamps: true
})
var TeacherModel = mongoose.model('teachers', TeacherSchema);
module.exports = TeacherModel;
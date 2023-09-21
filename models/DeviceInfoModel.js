const mongoose = require('mongoose');
require('../mongo');

const DeviceSchema = new mongoose.Schema({
    studentId:  { type: mongoose.Types.ObjectId, ref: "students", required: true, index: true },
    deviceId:  { type: "String", required: true, index: true },
    fcmToken:  { type: "String", required: true }
},{
    timestamps: true
})
var DeviceModel = mongoose.model('device_informations', DeviceSchema);
module.exports = DeviceModel;
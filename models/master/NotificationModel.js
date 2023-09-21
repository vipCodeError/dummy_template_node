const mongoose = require('mongoose');
require('../../mongo');

const NotificationSchema = new mongoose.Schema({
    title:      { type: String, trim: true, index: true },
    description:{ type: String, trim: true, index: true },
},{
    timestamps: true
})
var NotificationModel = mongoose.model('mnotifications', NotificationSchema);
module.exports = NotificationModel;
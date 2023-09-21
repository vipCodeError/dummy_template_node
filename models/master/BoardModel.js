const mongoose = require('mongoose');
require('../../mongo');

const BoardSchema = new mongoose.Schema({
    name:       { type: String, trim: true, index: true },
    status:     { type: Boolean, default: true },
    icon:       { type: Array, trim: true, default: null, index: true },
    priority:   { type: Number, default: 0 },
    is_subscription: { type: Boolean, default: false },
    amount:     { type: Number, default: 999 },
    createdBy:  { type: mongoose.Schema.ObjectId, ref: 'users', default: null, index: true }
},{
    timestamps: true
})
var BoardModel = mongoose.model('mboards', BoardSchema);
module.exports = BoardModel;
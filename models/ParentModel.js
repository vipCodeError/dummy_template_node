const mongoose = require('mongoose');
require('../mongo');

const ParentSchema = new mongoose.Schema({
    name:       { type: String, trim: true, index: true, default: null},
    email:      { type: String, trim: true, index: true, required: true },
    phone:      { type: String, index: true, default: null },
    password:   { type: String, trim: true, default: null},
    isDeleted: { type: Boolean, default: false}
},{
    timestamps: true
})
var ParentModel = mongoose.model('parents', ParentSchema);
module.exports = ParentModel;
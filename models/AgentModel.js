const mongoose = require('mongoose');
require('../mongo');

const AgentSchema = new mongoose.Schema({
    teacherId:  { type: mongoose.Types.ObjectId, ref: "teachers", index: true, required: true },
    name:       { type: String, trim: true, index: true, required: true},
    email:      { type: String, trim: true, index: true },
    phone:      { type: String, index: true },
    uniqueCode: { type: String, required: true }
},{
    timestamps: true
})
var AgentModel = mongoose.model('agents', AgentSchema);
module.exports = AgentModel;
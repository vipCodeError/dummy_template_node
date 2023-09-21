const mongoose = require('mongoose');
require('../../mongo');

const IntroSchema = new mongoose.Schema({
    title:          { type: String, trim: true, index: true },
    status:         { type: Boolean, default: true },
    image:          { type: Array, trim: true, default: null, index: true },
    priority:       { type: Number, default: 0 },
},{
    timestamps: true
})
var IntroModel = mongoose.model('intro_sliders', IntroSchema);
module.exports = IntroModel;
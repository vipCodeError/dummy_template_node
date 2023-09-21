const mongoose = require('mongoose');
require('../../mongo');

const BannerSchema = new mongoose.Schema({
    title:          { type: String, trim: true, index: true },
    status:         { type: Boolean, default: true },
    image:          { type: Array, trim: true, default: null, index: true },
    priority:       { type: Number, default: 0 },
    link:           { type: String, trim: true, index: true }
},{
    timestamps: true
})
var BannerModel = mongoose.model('mbanners', BannerSchema);
module.exports = BannerModel;
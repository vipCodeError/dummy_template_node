const mongoose = require('mongoose');
require('../../mongo');

const NewsSchema = new mongoose.Schema({
    newsTitle:       { type: String, trim: true, index: true },
    newsContent:     { type: String, default: true },
    icon:            { type: Array, trim: true, default: null, index: true },
    priority:        { type: Number, default: 0 },
    publishedBy:     { type: String, default: 999 },
    status:          { type: Boolean, default: false },
},{ 
    timestamps: true
})

var NewsModel = mongoose.model('mNews', NewsSchema);
module.exports = NewsModel;
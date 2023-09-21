const mongoose = require('mongoose');
require('../../mongo');

const BlogSchema = new mongoose.Schema({
    title:          { type: String, trim: true, index: true },
    description:    { type: String, trim: true, index: true },
    longURL:        { type: String, trim: true, index: true },
    status:         { type: Boolean, default: true },
    image:          { type: Array, trim: true, default: null, index: true },
    priority:       { type: Number, default: 0 },
    deepLink:       { type: String, default: null },
    createdBy:      { type: mongoose.Schema.ObjectId, ref: 'users', default: null, index: true }
},{
    timestamps: true
})
var BlogModel = mongoose.model('mblogs', BlogSchema);
module.exports = BlogModel;
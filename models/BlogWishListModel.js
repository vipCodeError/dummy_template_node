const mongoose = require('mongoose');
require('../mongo');

const BlogWishListSchema = new mongoose.Schema({
    studentId:  { type: mongoose.Types.ObjectId, ref: "students", required: true, index: true },
    blogId:     { type: mongoose.Types.ObjectId, ref: "mblogs", required: true, index: true },
},{
    timestamps: true
})
var BlogWishListModel = mongoose.model('BlogWishLists', BlogWishListSchema);
module.exports = BlogWishListModel;
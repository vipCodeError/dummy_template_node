const mongoose = require('mongoose');
require('../mongo');

const CartSchema = new mongoose.Schema({
    studentId:  { type: mongoose.Types.ObjectId, ref: "students", required: true, index: true },
    chapterId:  { type: mongoose.Types.ObjectId, ref: "mchapters", required: true, index: true },
    subjectId:  { type: mongoose.Types.ObjectId, ref: "msubjects", required: true, index: true },
    gradeId:    { type: mongoose.Types.ObjectId, ref: "mgrades", required: true, index: true },
    boardId:    { type: mongoose.Types.ObjectId, ref: "mboards", required: true, index: true },
},{
    timestamps: true
})
var CartModel = mongoose.model('carts', CartSchema);
module.exports = CartModel;
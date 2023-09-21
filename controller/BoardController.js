const BoardModel = require("../../models/master/BoardModel");

//Create Board
exports.createBoard = (req, res, next) => {
    
    if (req.body._id === null || req.body._id === "null") {
        saveBoard(req, res, next);
    } else {
        updateBoard(req, res, next);
    }
  };
  
//Function to save the Board
async function saveBoard(req, res, next) {
    
    let data = new BoardModel({
        name:       req.body.name,
        status:     req.body.status,
        icon:       req.body.icon,
        priority:   req.body.priority,
        is_subscription: req.body.is_subscription
    });
    data.save()
    .then(async (info) => {
        return res.json({
            status: true,
            data: info,
            message: "Created Successfully!",
            title: "success"
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err,
            message: "Something went wrong!",
            title: "error"
        })
    });
}
  
//Function to update the Board
async function updateBoard(req, res, next) {
    var updateData = {};
    for (var field in req.body) {
        updateData[field] = req.body[field];
    }
  
    //Update the details of the blog in database
    BoardModel.findOneAndUpdate(
        { _id: req.body._id },
        { $set: updateData },
        { new: true }
    )
    .exec()
    .then(async (info) => {
        return res.json({
            status: true,
            data: info,
            message: "Updated Successfully!",
            title: "success"
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err,
            message: "Something went wrong!",
            title: "error"
        })
    });
}

//API to get all the Board list
exports.listBoard = (req, res, next) => {
    BoardModel.find({ status: true })
    .sort({priority: 1})
    .exec()
    .then(async (info) => {
        return res.json({
            status: true,
            data: info,
            message: "Displayed Successfully!",
            title: "success"
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err,
            message: "Something went wrong!",
            title: "error"
        })
    });
};

//API to get all the Board list
exports.listAllBoard = (req, res, next) => {
    BoardModel.find()
    .sort({createdAt: -1})
    .exec()
    .then(async (info) => {
        return res.json({
            status: true,
            data: info,
            message: "Displayed Successfully!",
            title: "success"
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err,
            message: "Something went wrong!",
            title: "error"
        })
    });
};

//API to delete the Board
exports.deleteBoard = (req, res) => {
    BoardModel.findOneAndDelete({ _id: req.params.boardId })
    .exec()
    .then(async (info) => {
        return res.json({
            status: true,
            data: info,
            message: "Deleted Successfully!",
            title: "success"
        })
    })
    .catch((err) => {
        return res.json({
            status: false,
            data: err,
            message: "Something went wrong!",
            title: "error"
        })
    });
};
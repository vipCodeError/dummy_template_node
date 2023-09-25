const NewsModel = require("../../models/master/NewsModel");

//Create Board
exports.createNews = (req, res, next) => {
    
    if (req.body._id === null || req.body._id === "null") {
        saveNews(req, res, next);
    } else {
        updateNews(req, res, next);
    }
  };
   
//Function to save the Board
async function saveNews(req, res, next) {
    
    let data = new NewsModel({
        newsTitle:       req.body.newsTitle,
        newsContent:     req.body.newsContent,
        icon:            req.body.icon,
        priority:        req.body.priority,
        publishedBy:     req.body.publishedBy
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
async function updateNews(req, res, next) {
    var updateData = {};
    for (var field in req.body) {
        updateData[field] = req.body[field];
    }
  
    //Update the details of the blog in database
    NewsModel.findOneAndUpdate(
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
exports.listNews = (req, res, next) => {
    NewsModel.find({ status: true })
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
exports.listAllNews = (req, res, next) => {
    NewsModel.find()
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
exports.deleteNews = (req, res) => {
    NewsModel.findOneAndDelete({ _id: req.params.newsId })
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
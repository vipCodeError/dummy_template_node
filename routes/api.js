const express = require('express');
const router = express.Router();

const BoardController   = require('../controllers/Masters/BoardController');
const NewsController   = require('../controllers/Masters/NewsController');


/********Master API's**********/
//Board API's - 
router.post('/createBoard', BoardController.createBoard);
router.get('/listBoard', BoardController.listBoard);
router.delete('/deleteBoard/:boardId', BoardController.deleteBoard);
router.get('/listAllBoard', BoardController.listAllBoard);

// News API's 
router.post('/createNews', NewsController.createNews);
router.get('/listNews', NewsController.listNews);
router.delete('/deleteNews/:newsId', NewsController.deleteNews);
router.get('/listAllNews', NewsController.listAllNews);

module.exports = router;
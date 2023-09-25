const express = require('express');
const router = express.Router();

const BoardController   = require('../controllers/Masters/BoardController');

/********Master API's**********/
//Board API's - 
router.post('/createBoard', BoardController.createBoard);
router.get('/listBoard', BoardController.listBoard);
router.delete('/deleteBoard/:boardId', BoardController.deleteBoard);
router.get('/listAllBoard', BoardController.listAllBoard);

module.exports = router;
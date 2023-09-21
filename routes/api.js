const express = require('express');
const router = express.Router();

const BoardController           = require('../controllers/Masters/BoardController');
const GradeController           = require('../controllers/Masters/GradeController');
const SubjectController         = require('../controllers/Masters/SubjectController');
const ChapterController         = require('../controllers/Masters/ChapterController');
const TopicController           = require('../controllers/Masters/TopicController');
const BlogController            = require("../controllers/Masters/BlogController");
const IntroController           = require("../controllers/Masters/IntroController");
const TeacherController         = require("../controllers/Teacher/TeacherController");
const ParentController          = require("../controllers/Parent/RegisterController");
const StudentController         = require("../controllers/Student/RegisterController");
const CartController            = require("../controllers/Common/CartController");
const WishListController        = require("../controllers/Common/WishListController");
const SearchController          = require("../controllers/Common/SearchController");
const PaymentController         = require("../controllers/Payment/PaymentController");
const QuizController            = require("../controllers/Quiz/QuizController");
const BannerController          = require("../controllers/Masters/BannerController");
const NotificationController    = require("../controllers/Masters/NotificationController");
const ChapterBagController      = require("../controllers/Student/BagController");
const StatisticsController      = require("../controllers/Common/StatisticsController");
const CouponController          = require("../controllers/Masters/CouponController");

/********Master API's**********/
//Board API's - 
router.get('/getStudent/:studentId', PaymentController.getStudent);
router.post('/createBoard', BoardController.createBoard);
router.get('/listBoard', BoardController.listBoard);
router.delete('/deleteBoard/:boardId', BoardController.deleteBoard);
router.get('/listAllBoard', BoardController.listAllBoard);

//Grade API's - 
router.post('/createGrade', GradeController.createGrade);
router.get('/listGrade', GradeController.listGrade);
router.get('/listAllGrade', GradeController.listAllGrade);
router.delete('/deleteGrade/:gradeId', GradeController.deleteGrade);

//Subject API's - 
router.post('/createSubject', SubjectController.createSubject);
router.get('/listSubject', SubjectController.listSubject);
router.get('/listAllSubject', SubjectController.listAllSubject);
router.delete('/deleteSubject/:subjectId', SubjectController.deleteSubject);

//Chapter API's - 
router.post('/createChapter', ChapterController.createChapter);
router.get('/listChapter', ChapterController.listChapter);
router.get('/listAllChapter', ChapterController.listAllChapter);
router.delete('/deleteChapter/:chapterId', ChapterController.deleteChapter);

//Topic API's - 
router.post('/createTopic', TopicController.createTopic);
router.get('/listTopic', TopicController.listTopic);
router.delete('/deleteTopic/:topicId', TopicController.deleteTopic);
router.get('/listAllTopic', TopicController.listAllTopic);

//Intro Slider API's - 
router.post('/createIntro', IntroController.createIntro);
router.get('/listIntro', IntroController.listIntro);
router.delete('/deleteIntro/:introId', IntroController.deleteIntro);
router.get('/listAllIntro', IntroController.listAllIntro);

//API's for featured
router.post('/addToFeatured', TopicController.addToFeatured);
router.post('/removeFromFeatured', TopicController.removeFromFeatured);
router.get('/getFeaturedList', TopicController.getFeaturedList);

//Blog API's - 
router.post('/createBlog', BlogController.createBlog);
router.get('/listBlog', BlogController.listBlog);
router.delete('/deleteBlog/:blogId', BlogController.deleteBlog);
router.get('/listAllBlog', BlogController.listAllBlog);

//Banner API's
router.post('/createBanner', BannerController.createBanner);
router.get('/listBanner', BannerController.listBanner);
router.delete('/deleteBanner/:bannerId', BannerController.deleteBanner);
router.get('/listAllBanner', BannerController.listAllBanner);

//Notification API's
router.post('/createNotification', NotificationController.createNotification);
router.get('/listNotification', NotificationController.listNotification);
router.delete('/deleteNotification/:notificationId', NotificationController.deleteNotification);
router.get('/listAllNotification', NotificationController.listAllNotification);

//Quiz API's - 
router.post('/createQuiz', QuizController.createQuiz);
router.delete('/deleteQuiz/:quizId', QuizController.deleteQuiz);
router.get('/listAllQuiz', QuizController.listAllQuiz);
router.get('/getQuizDetails/:quizId', QuizController.getQuizDetails);
router.post('/getQuizFromTopicId', QuizController.getQuizFromTopicId);
router.post('/submitQuiz', QuizController.submitQuiz);

//Coupon API's
router.post('/createCoupon', CouponController.createCoupon);
router.delete('/deleteCoupon/:couponId', CouponController.deleteCoupon);
router.get('/listAllCoupon', CouponController.listAllCoupon);
router.post('/listCoupons', CouponController.listCoupons);
router.post("/getCouponDetails", CouponController.getCouponDetails);

/*************App Level API's***************/

router.get('/getAllGrades/:boardId',GradeController.getAllGrades);
router.post('/getChaptersFromSubjectId', ChapterController.getChaptersFromSubjectId);
router.post('/getTopicsFromChapterId', TopicController.getTopicsFromChapterId);
router.get('/getAllSubjectsFromGradeId/:gradeId', SubjectController.getAllSubjectsFromGradeId);
router.get('/getAllChaptersFromSubjectId/:subjectId', ChapterController.getAllChaptersFromSubjectId);
router.post('/saveTimeLog', TopicController.saveTimeLog);

//Agent API's - 
router.post('/registerAgent', TeacherController.registerAgent);
router.post('/updateAgent', TeacherController.updateAgent);
router.get('/getAgentList/:teacherId', TeacherController.getAgentList);
router.get('/getAgentDetails/:agentId', TeacherController.getAgentDetails);
router.get('/getAllAgentList', TeacherController.getAllAgentList);

//Parent API's - 
router.post('/checkParentEmail', ParentController.checkParentEmail);
router.post('/registerParent', ParentController.registerParent);
router.post('/loginParent', ParentController.loginParent);
router.post('/updateParent', ParentController.updateParent);
router.post('/changeParentPassword', ParentController.changeParentPassword);
router.get('/getParentList', ParentController.getParentList);
router.post('/getParentDetails', ParentController.getParentDetails);
router.post('/parentForgotPassword', ParentController.parentForgotPassword);
router.delete('/deleteParentAccount/:parentId', ParentController.deleteParentAccount);

//Student API's - 
router.post('/checkStudentEmail', StudentController.checkStudentEmail);
router.post('/checkUserExists', StudentController.checkUserExists);
router.post('/registerUser', StudentController.registerUser);
router.post('/registerStudent', StudentController.registerStudent);
router.post('/loginStudent', StudentController.loginStudent);
router.post('/logoutStudent', StudentController.logoutStudent);
router.post('/updateStudent', StudentController.updateStudent);
router.post('/changeStudentPassword', StudentController.changeStudentPassword);
router.post('/getStudentList', StudentController.getStudentList);
router.post('/getStudentDetails', StudentController.getStudentDetails);
router.post('/getStudentsFromParentId', StudentController.getStudentsFromParentId);
router.get("/getStudentsParentList", StudentController.getStudentsParentList);
router.post('/studentForgotPassword', StudentController.studentForgotPassword);
router.delete('/deleteStudentAccount/:studentId', StudentController.deleteStudentAccount);
router.post('/registerAdminUser', StudentController.registerAdminUser);
router.get('/getAllAdminUsers', StudentController.getAllAdminUsers);
router.post('/updateAdminUser', StudentController.updateAdminUser);

//Teacher API's - 
router.post('/checkTeacherEmail', TeacherController.checkTeacherEmail);
router.post('/registerTeacher', TeacherController.registerTeacher);
router.post('/loginTeacher', TeacherController.loginTeacher);
router.post('/updateTeacher', TeacherController.updateTeacher);
router.post('/changeTeacherPassword', TeacherController.changeTeacherPassword);
router.get('/getTeacherList', TeacherController.getTeacherList);
router.post('/getTeacherDetails', TeacherController.getTeacherDetails);
router.post('/teacherForgotPassword', TeacherController.teacherForgotPassword);
router.post('/approveTeacher', TeacherController.approveTeacher);
router.delete('/deleteTeacherAccount/:teacherId', TeacherController.deleteTeacherAccount);

//Cart API's
router.post('/bulkAddToCart', CartController.bulkAddToCart);
router.post('/addToCart', CartController.addToCart);
router.post('/listCart', CartController.listCart);
router.delete('/removeFromCart/:cartId', CartController.removeFromCart);
router.post('/bulkRemoveFromCart', CartController.bulkRemoveFromCart);
router.delete('/clearCart/:studentId', CartController.clearCart);

//Wish List API's
router.post('/addToPlaylist', WishListController.addToWishList);
router.post('/listPlaylist', WishListController.listWishList);
router.delete('/removeFromPlaylist/:wishListId', WishListController.removeFromWishList);

router.post('/addToBlogWishList', WishListController.addToBlogWishList);
router.get('/listBlogWishList/:studentId', WishListController.listBlogWishList);
router.post('/removeFromBlogWishList', WishListController.removeFromBlogWishList);

//Search API
router.post("/search", SearchController.search);

//Payment API's
router.post("/addPaymentDetails", PaymentController.addPaymentDetails);
router.post("/webhookPayment", PaymentController.webhookPayment);
router.post("/getTransactions", PaymentController.getTransactions);
router.post("/getPartnerTransactions", PaymentController.getPartnerTransactions);
router.post("/getAllTransactions", PaymentController.getAllTransactions);
router.post("/getTotalRevenuePartner", PaymentController.getTotalRevenuePartner);
router.post("/getAgentTransactions", PaymentController.getAgentTransactions);
router.post("/getAgentDetailTransactions", PaymentController.getAgentDetailTransactions);
router.post("/checkChapterPurchased", PaymentController.checkChapterPurchased);
router.post("/updatePaymentDetails", PaymentController.updatePaymentDetails);
router.post('/createIOSSubscription', PaymentController.createIOSSubscription);
router.post("/updateTransaction", PaymentController.updateTransaction);
//----subscription------------------//
router.post('/subscribeSubscription', PaymentController.subscribeSubscription);
router.post('/cancelSubscription', PaymentController.cancelSubscription);
router.post('/subscriptionPayment', PaymentController.subscriptionPayment);
router.get('/checkSubscriptionStatus/:studentId', PaymentController.checkSubscriptionStatus);
router.post("/subscribeDynamicSubscription", PaymentController.subscribeDynamicSubscription);

//Razorpay subscription API's
router.post("/createPlan", PaymentController.createPlan);
router.post("/getPlansByBoardId", PaymentController.getPlansByBoardId);
router.get("/getAllPlans", PaymentController.getAllPlans);
router.post("/updatePlan", PaymentController.updatePlan);

router.post('/checkapis', PaymentController.fetchPlans);

//--------------chapter-------------------//
router.post('/addChapterToBag', ChapterBagController.AddChapterToBag);
router.get('/getChapterBagList/:studentId', ChapterBagController.getChapterBagList);
router.delete('/deleteChapterFromBag/:id', ChapterBagController.deleteChapterFromBag);
router.delete('/deleteAllChapterFromBag/:studentId', ChapterBagController.deleteAllChapterFromBag);

//----------Statistics ----------------------//
router.post('/saveStatisticsTime', StatisticsController.saveStatisticsTime);
router.post('/getDailyUsageStatistics', StatisticsController.getDailyUsageStatistics);
router.post('/getStudentProgress', StatisticsController.getStudentProgress);

router.post('/saveCompletionStatus', PaymentController.saveCompletionStatus);
router.post('/subjectProgressStatistics', PaymentController.subjectProgressStatistics);
router.post('/chapterProgressStatistics', PaymentController.chapterProgressStatistics);
router.post('/subjectWiseChapterStatistics', PaymentController.subjectWiseChapterStatistics);

module.exports = router;
const app = require('express');
const router = app.Router();

const lab1Routes = app.Router();

const lab1Controller = require('../controllers/lab1Controller');
const homeController = require('../controllers/HomeController');

router.get('/', homeController.index);



lab1Routes.get('/bai1', lab1Controller.excercise_1);
lab1Routes.get('/bai2', lab1Controller.excercise_2);

router.use('/lab1', lab1Routes);

module.exports = router;
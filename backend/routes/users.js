var express = require('express');
const userController = require("../controllers/userContoller");
var auth = require("../middlewares/authorization");

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//auth.isLoggedIn,

router.get('/login', userController.doLogin)
router.post('/signup',  userController.doSignUP)
router.get('/profile', userController.getProfile)


module.exports = router;

const express = require("express");
const userController = require("../controllers/userContoller");
const rideController = require("../controllers/rideContoller");
var auth = require("../middlewares/authorization");

const router = express.Router();




router.get('/', function (req, res) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.json('homepage')
})


//-----API TO LOGOUT USER -----
router.get('/logout', function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

});

router.get('/user/login', userController.doLogin)

router.post('/user/signup', auth.isLoggedIn, userController.doSignUP)


router.patch('/user/update', userController.doUpdate)


//,auth.isLoggedIn
router.get('/rides/all',rideController.getAllRides)
router.post('/rides/publish',rideController.publishRide)
router.get('/rides/search',rideController.searchRide)
router.delete('/ride/delete',rideController.deleteRide)
router.put('/rides/update',rideController.updateRide)



module.exports = router;

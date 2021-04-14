const path = require("path");
const Ride = require('../db/ride-model')


module.exports.getAllRides = async function (req, res) {
    await Ride.find({}, (err, ride) => {
        if (err) {
            res.json({ success: false, message: 'failed to fetch rides' })
        }
        else {
            if (!ride) {
                res.json({ success: true, message: 'No rides in DataBase' })
            }
        }
        res.json({ success: true, message: 'rides returned', ride: ride });
    })
};

module.exports.publishRide = async function (req, res) {

    const { from, to, createdOn, seatsNumber, car, driver } = req.body;
    console.log(req.body)
    if (!from || !to || !createdOn || !seatsNumber || !car || !driver) {
        return res.json({
            success: false,
            message: 'data is not valid !!'
        });
    }
    const ride = { from, to, createdOn, seatsNumber, car, driver };
    await Ride.create(ride)
        .then(result => res.json({ success: true, message: 'ride created successfully', result: result }))
        .catch(err => res.json({ success: false, message: 'failed to create ride', err: err }));
};

module.exports.searchRide = function (req, res) {

   const fromCity     =req.body.from ;
   const toCity       =req.body.to    ;
   const rideDate     =req.body. createdOn  ;
    Ride.getRidesBySearch(fromCity, toCity, rideDate)
        .then((data) => {  res.json({ success: true, message: 'ride obtained successfully', rides: data }) })
        .catch(err => res.json({ success: false, message: 'ride not obtained', err: err }))
};

module.exports.updateRide = async function (req, res) {
    await Ride.updateOne(
        { "_id": req.body._id },
        req.body ,
    ).then((obj) => {
        res.json({ success: true, message: 'ride updated successfully' })
        //res.status(201).redirect('ride')
    }).catch(err => res.json({ success: false, message: 'ride not updated' })
    )
}

module.exports.deleteRide = function (req, res) {
    const { id } = req.params;

    Ride.deleteOne({ id })
        .then({ success: true, message: 'ride deleted successfully' })
        .catch(err => res.json({ success: false, message: 'ride not deleted' }))
};

module.exports.getRidesByDriver = function (req, res) {
    const email = req.params.email;

    Ride.getRidesByEmail(email)
        .then((data) => { res.json({ success: true, message: 'ride obtained successfully', rides: data }) })
        .catch(err => res.json({ success: false, message: 'ride not obtained', err: err }))
};




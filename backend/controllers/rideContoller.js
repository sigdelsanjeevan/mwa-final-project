const path = require("path");
const Ride = require('../db/ride-model')


module.exports.getAllRides = async function (req, res) {
    await Ride.find({}, (err, ride) => {
        var response = {
            status: 200,
            message: ride
        };
        if (err) {
            response.status = 404;
            response.message = { "Message": "error happend" }
        }
        else {
            if (!ride) {
                response.status = 200;
                response.message = { "Message": "No rides in DataBase" }
            }
        }
        res.status(response.status).json(response.message);
    })
};

module.exports.publishRide = async function (req, res) {

    const { _id, from, to, createdOn, seatsNumber, car } = req.body;
    if (!_id || !from || !to || !createdOn || !seatsNumber || !car) {
        return res.status(400).json({
            message: 'data is not valid !!'
        });
    }
    const ride = { _id, from, to, createdOn, seatsNumber, car };
    await Ride.create(ride)
        .then(result => res.status(201).json(result))
        .catch(err => res.send(err));


};

module.exports.searchRide = function (req, res) {
    
    const { fromCity, toCity, rideDate } = req.body;
    if (!fromCity && !toCity && !rideDate) {
        return res.status(400).json({
            message: 'empty search'
        });
    }
    console.log(fromCity, toCity, rideDate);
    // await Ride.find
    res.json([
        {
            _id: 8,
            from: "anahzhzhzhzh",
            to: "jksbi",
            createdOn: "1221-02-12T05:50:36.000+00:00",
            seatsNumber: 2,
            car: {
                _id: "6074ccf05d94186284205e40",
                model: "toyotiiiia",
                year: "1970-01-01T00:00:02.020+00:00",
                color: "blue"
            }
        },
        {
            _id: 9,
            from: "anahzhzhzhzh",
            to: "jksbi",
            createdOn: "1221-02-12T05:50:36.000+00:00",
            seatsNumber: 2,
            car: {
                _id: "6074ccf05d94186284205e40",
                model: "toyotiiiia",
                year: "1970-01-01T00:00:02.020+00:00",
                color: "blue"
            }
        },
        {
            _id: 10,
            from: "anahzhzhzhzh",
            to: "jksbi",
            createdOn: "1221-02-12T05:50:36.000+00:00",
            seatsNumber: 2,
            car: {
                _id: "6074ccf05d94186284205e40",
                model: "toyotiiiia",
                year: "1970-01-01T00:00:02.020+00:00",
                color: "blue"
            }
        }
    ]);
};

module.exports.updateRide = async function (req, res) {
    await Ride.updateOne(
        { "_id": req.body._id },
        req.body ,
    ).then((obj) => {
        console.log('Updated - ');
        res.status(201).redirect('ride')
    }).catch(err => res.send("err" + err))
}

module.exports.deleteRide = function (req, res) {
    const { id } = req.params;

    Ride.deleteOne({ id })
        .then(result => res.json(result))
        .catch(err => res.send(err))
};



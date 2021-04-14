const path = require("path");
const Ride = require('../db/ride-model')


module.exports.getAllRides = async function (req, res) {
    await Ride.find({}, (err, ride) => {
        if (err) {
            res.json({success:false,message:'failed to fetch rides'})
        }
        else {
            if (!ride) {
                res.json({success:true,message:'No rides in DataBase'})
            }
        }
        res.json({success:true,message:'rides returned',ride:ride});
    })
};

module.exports.publishRide = async function (req, res) {

    const { from, to, createdOn, seatsNumber, car,driver } = req.body;
    console.log(req.body)
    if ( !from || !to || !createdOn || !seatsNumber || !car || !driver) {
        return res.json({
            success:false,
            message: 'data is not valid !!'
        });
    }
    const ride = {  from, to, createdOn, seatsNumber, car,driver };
    await Ride.create(ride)
        .then(result => res.json({success: true,message:'ride created successfully', result: result}))
        .catch(err => res.json({success:false,message:'failed to create ride',err:err}));
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
        res.json({success: true,message:'ride updated successfully'})
        //res.status(201).redirect('ride')
    }).catch(err => res.json({success: false,message:'ride not updated'})
    )
}

module.exports.deleteRide = function (req, res) {
    const { id } = req.params;

    Ride.deleteOne({ id })
        .then({success: true,message:'ride deleted successfully'})
        .catch(err => res.json({success: false,message:'ride not deleted'}))
};



const express = require('express');

const vehicles = require('../models/vehiclePosts');
const Vehicles = require('../models/vehiclePosts');

const router = express.Router();

router.post('/vehicles/save', (req, res) => {
    let newVehicle = new vehicles(req.body);

    newVehicle.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success: "registration saved successfully"
        });
    });
});

//get specific vehicle's details
router.get('/vehicledetailsone/:id', (req, res) => {
    const vehicleID = req.params.id;

    vehicles.findById(vehicleID, (err, vehicles) => {
        if(err){
            return res.status(400).json({
                success: false, err
            })
        }

        return res.status(200).json({
            success: true, vehicles
        });
    });
});

module.exports = router;
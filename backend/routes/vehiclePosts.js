const express = require('express');

const VehicleRegistration = require('../models/vehiclePosts');

const router = express.Router();

router.post('vehicleregistration/save', (req, res) => {
    let newVehicle = new VehicleRegistration(req.body);

    newVehicle.save((err) => {
        if(err){
            return res.status(400).json({
                error : err
            });
        }

        return res.status(200).json({
            success: "registration saved successfully"
        });
    });
});
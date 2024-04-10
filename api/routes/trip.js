const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const Trip = require('../models/trip')

router.get('/', (req, res) => {
    Trip.find()
        .select('_id title startDate endDate description totalTimeTravelled totalDistanceTravelled ' +
            'startPlace finalDestination peopleTravelling')
        .populate('travelItem')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                trips: docs.map((doc) => {
                    return {
                        _id: doc._id,
                        travelItem: doc.travelItem,
                        title: doc.title,
                        description: doc.description,
                        startDate: doc.startDate,
                        endDate: doc.endDate,
                        totalTimeTravelled: doc.totalTimeTravelled,
                        totalDistanceTravelled: doc.totalDistanceTravelled,
                        startPlace: doc.startPlace,
                        finalDestination: doc.finalDestination,
                        peopleTravelling: doc.peopleTravelling,
                        request: {
                            type: 'POST',
                            url: '127.0.0.1:3000/trips/' + doc._id
                        }
                    }
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
            })
        })
    res.status(200).json({
        message: 'Received list of trips'
    })
})

router.post('/', (req, res) => {
    const trip = new Trip({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        finalDestination: req.body.finalDestination,
        totalTimeTravelled: req.body.totalTimeTravelled,
        peopleTravelling: req.body.peopleTravelling,
        travelItem: req.body.travelItem._id
    })
    trip.save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router
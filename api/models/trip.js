const mongoose = require('mongoose')

const tripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    travelItem: { type: mongoose.Schema.Types.ObjectId, ref: 'TravelItem', required: true },
    title: { type: String, default: ''},
    startDate: Date,
    endDate: Date,
    description: { type: String, default: ''},
    totalTimeTravelled: { type: String, default: ''},
    totalDistanceTravelled: { type: String, default: ''},
    startPlace: { type: String, default: ''},
    finalDestination: { type: String, default: ''},
    peopleTravelling: [],
})

module.exports = mongoose.model('Trip', tripSchema)
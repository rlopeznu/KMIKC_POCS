'use strict'
var moongose = require('mongoose');
var Schema = moongose.Schema;

var FlightInfo = new Schema({
    title: String,
    date: String,
    location: String,
    aircraft: String,
    description: String
})

module.exports = moongose.model('flight_records', FlightInfo);
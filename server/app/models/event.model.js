/**
 * model: Event
 * author: Paul Marquardt
 */
 const mongoose = require('mongoose');

 const eventSchema = mongoose.Schema({
     title: String,
     date: String,
     time: String,
     location: String,
     description: String,
 }, {
     timestamps: true
 });
 
 module.exports = mongoose.model('Event', eventSchema);
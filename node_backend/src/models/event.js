const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
      },
      updatedAt: {
        type: Date,
        required: true,
      }, 
    });

const Event = mongoose.model('event', eventSchema);

module.exports = Event;
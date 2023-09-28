const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,

    },
    longitude: {
        type: Number,
        required: true,

    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,

    },
    password: {
        type: String,
        required: true,
        trim: true,
    },


},
)
const customer = mongoose.model('customer', customerSchema)

module.exports = customer;


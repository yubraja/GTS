const mongoose = require('mongoose')
const driverSchema = new mongoose.Schema({
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
    employee_id: {
        type: String,
        required: true,
        unique: true,
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
const driver = mongoose.model('driver', driverSchema)
    
module.exports = driver;
    

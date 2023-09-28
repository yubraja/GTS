
const User = require('../model/customer.js')
const seedData = require('./customer.json')
User.deleteMany({})
    .then(() => {
        return User.insertMany(seedData)
    })
    .then(console.log(seedData))
    .catch(console.error)
    .finally(() => {
        process.exit()
    })
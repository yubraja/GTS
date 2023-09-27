const mongoose = require('mongoose')


const URI =process.env.NODE_ENV === 'production'
        //if in production use this URI
        ? process.env.DB_URL
        //otherwise use this
    : 'mongodb://localhost/GTS';
        

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    //continue with any other options here
}).then(dbc => {
    console.log('SUCCESS');
})
    .catch(err => {
        console.log('EXITING');
        process.exit(1);
    });


module.exports = mongoose//to use from other files


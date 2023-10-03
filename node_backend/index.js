require('dotenv').config();
const connection = require('./src/database/db');
const session = require('express-session');
const express = require('express');
const cors=require('cors')
const cookieParser = require('cookie-parser');
const app = express();

//cors setting
app.use(cors({
  origin: "http://localhost:3000", //frontend url
  credentials: true
}))


//express session
app.use(
  session({
    name:"sid",
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24* 7, // would expire after 1 week5
        httpOnly: true, // The cookie only accessible by the web server
        sameSite:'lax',
        secure:false
    }
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;

(async () => await connection())();

//current user
const currentUserRoute=require('./src/routes/currentUser');
app.use('/currentUser',currentUserRoute);

// user detail
const userDetailRoute=require('./src/routes/userDetail');
app.use('/userDetail',userDetailRoute);

//login route
const loginRoute=require('./src/routes/login');
app.use('/login',loginRoute);

//logout route
const logoutRoute=require('./src/routes/logout');
app.use('/logout',logoutRoute);

//verify routes
const verifyRoute=require('./src/routes/emailVerify');
app.use('/verify',verifyRoute);


//user routes
const userRoute = require('./src/routes/user');
app.use('/user',userRoute)

//password reset
const forgotPasswordRoute=require('./src/routes/forgotPassword')
app.use('/forgot',forgotPasswordRoute)

//event  routes
const eventControlRoute=require('./src/routes/eventControl');
app.use('/event',eventControlRoute);

//driver verification routes
const driverVerificationRoute=require('./src/routes/driverVerification');
app.use('/driverVerification',driverVerificationRoute);

//driver verification routes
const sendEmailtoUser=require('./src/routes/sendEmailtoUser');
app.use('/sendEmailtoUser',sendEmailtoUser);

//allusers verification routes
const allUserRoute=require('./src/routes/allusers');
app.use('/allusers',allUserRoute);

app.listen(port, () => console.log(`Listening on port ${port}...`));

//importing express
const express = require('express');
//executing express
const index = express();
//const mongodb = require('mongodb');
const mongoose = require('mongoose');
//Importing routes
const studentsRoute = require('./routes/students.js');
const sessionsRoute = require('./routes/sessions.js');
const passwordRoute = require('./routes/passwords.js');
//So we can use jsonWebtokens
const jwt = require('jsonwebtoken');

//helps me parse data, a substitute for the deprecated version of body-parser
index.use(express.urlencoded({ extended: true }));
index.use(express.json());

//Display homepage 
index.get('/', (req,res)=> {
        res.send('Home Page');
});

//Importing Routes
index.use('/students', studentsRoute);
index.use('/sessions', sessionsRoute);
index.use('/passwords', passwordRoute);

//For dotenv, to secure database 
require('dotenv/config');

index.post('/login', (req,res)=>{
        const password = req.body.password
        if (password == process.env.UNIVERSAL_PASSWORD){
                const accessToken = jwt.sign(password, process.env.ACCESS_TOKEN_SECRET)
                res.json({accessToken:accessToken})
                console.log("The Access Token is: "+ accessToken)
        }else{
                res.json("Access Denied!")
                console.log("Access Denied!");
        }
});
//To Connect to the Database
mongoose.connect(process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true},
        () => console.log('Connected to MongoDB'));

//Set listening port to port 3000
index.listen(process.env.PORT || 3000)

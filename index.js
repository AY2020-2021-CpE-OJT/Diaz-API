//importing express
const express = require('express');
//executing express
const app = express();
//const mongodb = require('mongodb');
const mongoose = require('mongoose');
const studentsRoute = require('./routes/students.js');

//To Covnert JSON to JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Testing this out
app.get('/', (req,res)=> {
        res.send('Hello World');
});
//Importing Routes
app.use('/students', studentsRoute);

//For dotenv, to secure database 
require('dotenv/config');

//To Connect to the Database
mongoose.connect(process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true },
        () => console.log('Connected to MongoDB'));

//Set listening port to port 3000
app.listen(3000);


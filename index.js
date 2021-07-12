//importing express
const express = require('express');
//executing express
const index = express();
//const mongodb = require('mongodb');
const mongoose = require('mongoose');
const studentsRoute = require('./routes/students.js');

//To Covnert JSON to JS
index.use(express.urlencoded({ extended: true }));
index.use(express.json());

//Testing this out
index.get('/', (req,res)=> {
        res.send('Hello Worlds');
});
//Importing Routes
index.use('/students', studentsRoute);

//For dotenv, to secure database 
require('dotenv/config');

//To Connect to the Database
mongoose.connect(process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true},
        () => console.log('Connected to MongoDB'));

//Set listening port to port 3000
const PORT = process.env.PORT || 3000;
index.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

//importing express
const express = require('express');
//executing express
const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const studentsRoute = require('./routes/students.js');

//To Covnert JSON to JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//For dotenv, to secure database
require('dotenv/config');

//Test
app.get('/', (req,res)=> {
        res.send('Hello World');
});
//Importing Routes
app.use('/students', studentsRoute);

//To Connect to the Database
mongoose.connect
(process.env.DB_CONNECTION, 
{ useUnifiedTopology: true }, { useNewUrlParser: true },
() => console.log('Connected to MongoDB')
);



//Listens to port 3000
app.listen(3000);

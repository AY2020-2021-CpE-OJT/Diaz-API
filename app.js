//importing express
const express = require('express');
//executing express
const app = express();
const mongodb = require('mongodb');
const studentsRoute = require('./routes/students.js');
require('dotenv/config');
//Routes

app.get('/', (req,res)=> {
        res.send('Hello World');
});

app.use('/students', studentsRoute);

mongodb.connect
(process.env.DB_CONNECTION, 
{ useUnifiedTopology: true },
() => console.log('Connected to MongoDB')
);



//Listens to port 3000
app.listen(3000);

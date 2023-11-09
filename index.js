const express = require('express');
const dotenv = require('dotenv').config();
const connect = require('./dbConfig/dbConnection');

connect();
const app = express();
const port = process.env.PORT || 5000;



app.listen(port, ()=>{
    console.log(`Connected to ${port}`);
});


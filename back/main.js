const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://localhost:27017/blood');

app.use(express.json());
app.use(cors());

const donnorRoutes = require('./routes/donnor.routes');
app.use(donnorRoutes)

app.listen(3000,()=>{
    console.log('Server started at: http://localhost:3000/')
})
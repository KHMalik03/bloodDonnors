const mongoose = require('mongoose');

const Donnor = mongoose.model('Donnor',{
    name : String,
    bloodGroup : String,
    date : Date,
    notes : String
})

module.exports = Donnor
const mongoose = require("mongoose");
const { model } = require("mongoose");

let person = new mongoose.Schema({
    title :String ,
    age : String 
});

const Person = mongoose.model('person', person);

module.exports = Person;

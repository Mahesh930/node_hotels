// Importing the mongoose module
const mongoose = require('mongoose');

// Defining the Person schema
const PersonSchema = new mongoose.Schema({
    // The person's name, required and a string
    name: {
        type: String,
        required: true
    },
    // The person's age, optional and a number
    age: {
        type: Number
    },
    // The person's work, required and a string with an enum of ['Chef', 'Waiter', 'Manager']
    work: {
        type: String,
        enum: ['Chef', 'Waiter', 'Manager'],
        required: true
    },
    // The person's mobile number, required and a number
    mobile: {
        type: Number,
        required: true
    },
    // The person's email, required, unique, and a string
    email: {
        type: String,
        required: true,
        unique: true
    },
    // The person's address, optional and a string
    address: {
        type: String
    },
    // The person's salary, required and a number
    salary: {
        type: Number,
        required: true
    }
});

// Creating the Person model
const Person = mongoose.model('Person', PersonSchema);

// Exporting the Person model
module.exports = Person;
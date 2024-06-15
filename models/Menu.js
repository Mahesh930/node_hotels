// Importing the mongoose module
const mongoose = require('mongoose');

// Defining the Person schema
const MenuSchema = new mongoose.Schema({
    // The person's name, required and a string
    name: {
        type: String,
        required: true
    },
    // The person's age, optional and a number
    Price: {
        type: Number,
        required: true
    },
    // The person's work, required and a string with an enum of ['Chef', 'Waiter', 'Manager']
    id: {
        type: Number,
        required: true,
        unique:true
    },
    // The person's mobile number, required and a number
    sell: {
        type: Number,
        required: true
    }

});

// Creating the Person model
const Menu = mongoose.model('Menu', MenuSchema);

// Exporting the Person model
module.exports = Menu;
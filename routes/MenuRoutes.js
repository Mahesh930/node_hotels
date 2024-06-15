const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');


// Defining a POST route for the '/menu' URL
router.post('/', async (req, res) => {
    try {
        // Getting the request body data
        const data = req.body;

        // Checking if the request body data is empty
        if (!data) {
            throw new Error('Request body is empty');
        }

        // Creating a new menu document using the Mongoose model
        const newMenu = new Menu(data);

        // Saving the new menu to the database
        const savedMenu = await newMenu.save();
        console.log("data Saved");
        // Sending a response with the saved menu data and a 200 status code
        res.status(200).json(savedMenu);

    }
    catch (err) {
        // Catching any errors that occur during the execution of the try block
        console.log(err);
        // Sending a response with an error message and a 500 status code
        res.status(500).json({ error: "Internal Server Error!" });
    }

})


//GET method to get menu's data
router.get('/', async (req, res) => {
    try {
        const data = await Menu.find();

        console.log("data Fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
})


module.exports = router;
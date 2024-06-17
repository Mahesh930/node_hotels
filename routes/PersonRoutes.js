//this file is used to get, post, delete, update/put methods
//to handel persons data from hotel

const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

// Defining a POST route for the '/Person' URL
router.post('/', async (req, res) => {
    try {
        // Getting the request body data
        const data = req.body;

        // Checking if the request body data is empty
        if (!data) {
            throw new Error('Request body is empty');
        }

        // Creating a new Person document using the Mongoose model
        const newPerson = new Person(data);

        // Saving the new person to the database
        const savedPerson = await newPerson.save();
        console.log("Data Saved.....");
        // Sending a response with the saved person data and a 200 status code
        res.status(200).json(savedPerson);

    }
    catch (err) {
        // Catching any errors that occur during the execution of the try block
        console.log(err);
        // Sending a response with an error message and a 500 status code
        res.status(500).json({ error: "Internal Server Error!" });
    }

})


//GET method to get person's data
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();

        console.log("Fata Fetched....");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
})

router.get('/:workt', async (req, res) => {
    try {
        const workt = req.params.workt;
        if (workt == 'Chef' || workt == 'Manager' || workt == 'Waiter') {
            const responce = await Person.find({ work: workt });
            console.log("Data Fetched.....");
            res.status(200).json(responce);
        } else {
            res.status(404).json({ error: 'Invalid...' })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
})


router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        const updatedPersonData = req.body; // Updated data for the        person
        // Assuming you have a Person model
        const updatedPerson = await
            Person.findByIdAndUpdate(personId, updatedPersonData, {
                new: true, // Return the updated document
                runValidators: true, // Run Mongoose validation
            });

        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }
        // Send the updated person data as a JSON response
        // res.json(updatedPerson);
        console.log("Data Updated.....");
        res.status(200).json(updatedPerson);

    } catch (error) {
        console.error('Error updating person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


router.delete('/:id1', async (req, res) => {
    try {
        const personId = req.params.id1; // Extract the person's ID from the URL parameter
        // Assuming you have a Person model
        const deletedPerson = await Person.findByIdAndDelete(personId);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log("Data Deleted.....");
        res.status(200).json({message:"Deleted Successfully"});
    }
    catch (error) {
        console.error('Error deleting person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;
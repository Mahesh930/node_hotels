// console.log("Hello");
// console.log("jhdgbfuydbfued")


//function decleration types 
// function add(a,b){
//     return a+b;
// }

// const add= function add(a,b){
//     return a+b;
// }

//callback function 
// function callback(){
//     console.log(10);
// }

// var add=(a,b,callback)=>{
//     console.log(a+b);
//     callback();
//     return a+b;
// }

// var s= add(10,20,callback);


//function will run without call 
// (function(a,b){
//     console.log(a+b)
// })(50,10);





//=====================create server=====================================
// Importing the express module and creating an instance of it
const express = require('express');
const app = express();

// Importing the database module
const db = require('./db');

// Importing the body-parser module to parse JSON requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Importing the Person model from the models directory

const Menu = require('./models/Menu');

// Defining a GET route for the root URL ('/')
app.get('/', function (req, res) {
    // Sending a response with the message 'Hello World'
    res.send('Hello World');//res => response, req => request
})






//Import the router file
const personRoutes = require('./routes/PersonRoutes');
const MenuRoutes = require('./routes/MenuRoutes');

app.use('/Person', personRoutes);
app.use('/Menu', MenuRoutes);


// Starting the server and listening on port 3000
app.listen(3000);

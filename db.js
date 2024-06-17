//database connectivity

const mongoose = require('mongoose');

// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;


db.on('connected', () => {
    console.log('Connected........')
});
db.on('error', () => {
    console.log('error........')
});
db.on('disconnected', () => {
    console.log('DisConnected........')
});


module.exports = db;
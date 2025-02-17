// IMPORTING PACKAGE
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
// MAKING CONNECTION :::::    

// mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');
const DB = process.env.DB_URL;

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

// CHECKING CONNECTION
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;
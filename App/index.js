// Dependencies here
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const res = require("express/lib/response");

//Connect to database
mongoose.connect("mongodb://localhost:27017/YelpCamp", {
    useNewURLParser: true,
    //createUserIndex: true,        // Not supported in mongoose?
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

// Initialize application
const app = express();

/***************************************************
GET Request for homepage */
app.get("/", (req, res) => {
    res.send("HELLO");
})
    

// Set up app listener
const port = 5000
app.listen(port, () => {
    console.log("Listening on port ", port);
})
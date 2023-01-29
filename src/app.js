const express = require("express");
const app = express();

// Your code goes here

// Welcome page
app.get("/", (req, res) => {
  res.json("Welcome to the You Tube Subscribers API");
});

// Get All Subscribers
app.get("/subscribers", async (req, res) => {
 // async and await are used to handle promises
 // try and catch are used to handle errors
  try {
    // find() is used to find all the data
    let subscribers = await Subscriber.find();
    // send() is used to send the data to the client
    res.send(subscribers);
  } catch (error) {
    // console.log() is used to log the error
    console.log(error);
    // sendStatus() is used to send the status code to the client
    res.sendStatus(400);
  }
});

//Get Single Subscribers by Name and Subscribed Channel
app.get("/subscribers/names", async (req, res) => {
    try {
    // { name: 1, subscribedChannel: 1, _id: 0 } is used to display only the name and subscribedChannel
        let subscribers = await Subscriber.find({ name: 1, subscribedChannel: 1, _id: 0 });
        res.send(subscribers);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

// Get Single Subscriber by ID and Error Message
app.get("/subscribers/:id", async (req, res) => {
    // findOne() is used to find a single data
    // "req.params.id" to check if the ID is being passed correctly or not 
    try {
        let subscriber = await Subscriber.findOne({ _id: req.params.id });
        res.send(subscriber);
    } catch (error) {
        console.log(error);
        // message: error.message is used to display the error message
        res.status(400).json({ message: error.message });
    }
});

module.exports = app;

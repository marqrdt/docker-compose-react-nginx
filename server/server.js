/**
 * main file: server.js
 * author: seoinfotech
 */
const express = require('express');
const bodyParser = require('body-parser');
const appPort = 4001;
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to application." });
});

// Require Notes routes
require('./app/routes/post.routes.js')(app);

// listen for requests
app.listen(appPort, () => {
    console.log("Server is listening on port " + appPort);
});
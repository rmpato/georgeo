const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('web'));

const NodeGeocoder = require('node-geocoder');

let options = { provider: 'openstreetmap' };

let geocoder = NodeGeocoder(options);

app.get('/geocode', (request, response) => {
    let geocodeParams = request.query.addresses;

    geocoder.batchGeocode(geocodeParams)
        .then(results => response.json(flatResponse(results)))
        .catch(error => response.status(500)
            .json({ 'error': 'There was an error processing your request.' }));
});

app.post('/geocode', (request, response) => {
    let geocodeParams = request.body.addresses;

    geocoder.batchGeocode(geocodeParams)
        .then(results => response.json(flatResponse(results)))
        .catch(error => response.status(500)
            .json({ 'error': 'There was an error processing your request.' }));
});

function flatResponse(results, response) {
    return results.reduce((a, b) => a.concat(b.value), []);
};

app.listen(3000);
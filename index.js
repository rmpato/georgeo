const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('web'));

const NodeGeocoder = require('node-geocoder');

let options = { provider: 'openstreetmap' };

let geocoder = NodeGeocoder(options);

app.get('/geocode', (request, response) => {
    let geocodeParams = request.query.addresses.split('\n');

    geocoder.batchGeocode(geocodeParams)
        .then(results => response.json(flatResponse(results)));
});

app.post('/geocode', (request, response) => {
    let geocodeParams = request.body.addresses.split('\n');

    geocoder.batchGeocode(geocodeParams)
        .then(results => response.json(flatResponse(results)));
});

function flatResponse(results, response) {
    let geocodedResults = [];

    for (let i = 0; i < results.length; i++) {
        var element = results[i];

        geocodedResults = geocodedResults.concat(element.value);
    }

    return geocodedResults;
};

app.listen(3000);
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
    
    geocoder.batchGeocode(geocodeParams, function (err, results) {
        let geocodedResults = [];
        
        for (let i = 0; i < results.length; i++) {
            var element = results[i];
            
            geocodedResults = geocodedResults.concat(element.value);
        }
        
        response.json(geocodedResults);
    });

});

app.listen(3000);
const express = require('express');
const app = express();

const NodeGeocoder = require('node-geocoder');

let options = { provider: 'openstreetmap' };

let geocoder = NodeGeocoder(options);

geocoder.geocode('Buenos Aires, Argentina')
    .then(res => console.log(res))
    .catch(err => console.log(err));

app.use(express.static('web'));

app.listen(3000);
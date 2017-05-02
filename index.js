const NodeGeocoder = require('node-geocoder');

let options = { provider: 'openstreetmap' };

let geocoder = NodeGeocoder(options);

geocoder.geocode('Avenida Rivadavia 4200, Buenos Aires, Argentina')
    .then(res => console.log(res))
    .catch(err => console.log(err));


## :round_pushpin: Georgeo 
 Georgeo is a free to use geocoding service, made with [axios](https://github.com/mzabriskie/axios) and (node-geocoder)[https://github.com/nchaulet/node-geocoder], using [OpenStreetMap](http://www.openstreetmap.org) APIs.  

 You can:  
:point_right: Use it right now, from [our hosted version](https://georgeo.now.sh/).  
:point_right: Clone it and run it yourself.  
:point_right: Or use it through its rest API.  

### API
Just `post` an `addresses` array with addresses/locations descriptions to the `https://georgeo.now.sh/geocode` endpoint, like this one:

```
{ 
    addresses: ['Av Rivadavia 4260, CABA', 'Av Cordoba 1518, CABA']
}
```
And get your response:
```
[
  {
    "latitude": -34.6136774734694,
    "longitude": -58.425575355102,
    "country": "Argentina",
    "city": "CABA",
    "state": "CABA",
    "zipcode": "C1205AAP",
    "streetName": "Avenida Rivadavia",
    "streetNumber": "4260",
    "countryCode": "AR",
    "provider": "openstreetmap"
  },
  {
    "latitude": -34.5995718962963,
    "longitude": -58.3884548037037,
    "country": "Argentina",
    "city": "CABA",
    "state": "CABA",
    "zipcode": "C1055AAS",
    "streetName": "Avenida Córdoba",
    "streetNumber": "1518",
    "countryCode": "AR",
    "provider": "openstreetmap"
  }
]
```

Of course: as more information you provide about your locations, more precise the results become.

### Clone and install

First, clone the repo:

```
git clone https://github.com/rmpato/georgeo.git
```

Then, install it's dependencies.

```
npm install
```

Finally, run it.

```
npm start
```

Then you can browse  [localhost:3000](http://localhost:3000) and start geocoding.
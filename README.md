## :round_pushpin: Georgeo 
 Georgeo is a free to use geocoding service, made with [node-geocoder](https://github.com/nchaulet/node-geocoder), using [OpenStreetMap](http://www.openstreetmap.org) APIs.  
  
:point_right: You can use it right now from [it's client site](https://georgeo.now.sh/).  
:point_right: Or use it through its [rest API](https://github.com/rmpato/georgeo/#api).  
:point_right: Also you can [clone it](https://github.com/rmpato/georgeo/#clone-and-install) and run it on your own.  

### API
Just `post` an `addresses` array with locations descriptions to the `https://georgeo.now.sh/geocode` endpoint. For example:

```
{
    "addresses": ["an address", "another address", "and so on"]
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

And now you can browse  [localhost:3000](http://localhost:3000) and have a happy geocoding :smile:

## :round_pushpin: Georgeo 
:free: Geocoding service for free, made with [axios](https://github.com/mzabriskie/axios) and (node-geocoder)[https://github.com/nchaulet/node-geocoder].
:point_right: Use it as a SaaS, from [our hosted version](https://georgeo.now.sh/)  
:point_right: Clone and run it yourself.
<!--:point_right: Or use it through its rest API.  -->

### API
Just `post` an `addresses` array with addresses/locations descriptions to the `https://georgeo.now.sh/geocode` endpoint, like this one:

```
{ 
    addresses: ['Av Rivadavia 4260, CABA', 'Av Cordoba 1518, CABA']
}
```
Of course, as more information you provide about your locations, more precise the results become.

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
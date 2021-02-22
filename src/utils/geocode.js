const request = require('postman-request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiYnJhdm9zdWx0YW5vdiIsImEiOiJja2xhcXVuZG8zbjRyMm9xbzM3dGQ2OHplIn0.xZi221t3E-X-hG5Gfw-rxg&limit=1";

    request({url: url, json: true}, (error, response, {features}) => {
        if (error) {
            callback("Unable to connect", undefined);
        } else if (features.length === 0) {
            callback("Not found location", undefined)
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geocode
const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9b09067f7ece320ab86cf556a067cd83&query=${latitude},${longitude}`;

    request({url: url, json: true}, (error, response, body) => {
        if (error) {
            callback("Unable to connect", undefined);
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, "Current country is "+body.location.country + ". The temperature is " + body.current.temperature + ".")
        }
    })
}

module.exports = forecast;
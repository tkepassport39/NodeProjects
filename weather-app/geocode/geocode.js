// make http request
const request = require('request');
const urlAddress = require('./questAPI');

var geocodeAddress = (address, callback) => {
    
    console.log(address);
    let encodeA = encodeURIComponent(address)
    // encodeURIComponenet('1301 lombard street') turns it into URL readable
    console.log(encodeA);

    // get the api key from another file
    questUrl = urlAddress.urlAddressFunction(encodeA);

    // url with geocode location
    // json: true = data coming back is json data, convert to object
    request({
        // using a template string for URL
        url: `${questUrl.encoded}`,
        json: true
    }, (error, response, body) => {
        // 1st object, 2nd filter properties, 3rd arg format the json with # of space indentation 
        //console.log(JSON.stringify(response, undefined, 4));
        //console.log(body)
        if (error){
            // send a callback errorMessage to app.js 
            callback('Unable to connect to the google servers.');
            //console.log('Unable to connect to the google servers.');
        }
        else if (body.status > 0){
            // send a callback errorMessage to app.js
            callback('Unable to find address.');
            //console.log('Unable to find address.');
        }
        else if (body.info.statuscode === 0){
            // send undefined for errorMessage, send back results to app.js
            callback(undefined, {
                // setting up my own objects with their properties
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            })
            // This was a simple way of sending back console.log with results before adding the code from above
            // console.log(`Address: ${body.results[0].providedLocation.location}`);
            // console.log(`Lat: ${body.results[0].locations[0].latLng.lat}`);
            // console.log(`Lng: ${body.results[0].locations[0].latLng.lng}`)
        }
        else{
            console.log('Something went completely wrong please check address or you have internet coonection');
        }
    });

};

// lets us pass the geocodeAddress function to app.js
module.exports.geocodeAddress = geocodeAddress



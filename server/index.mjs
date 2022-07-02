
import fs from 'fs';
import { IncomingMessage } from 'http';
import xml2js from 'xml2js';
import watch from 'node-watch';

import findFlightWithMostStops from './features/findFlightWithMostStops.mjs';

let parser = new xml2js.Parser();
/// flight is misspelled as fligh on the file name
let flightDataJson;
let dataJson;




//if the data hasn't been read before, load the data.
if (!dataJson) {
    initializeData();
}
//Watch the flight data file for changes, if it changes, initializeData again
watch('./data/flighdata_A.xml', { recursive: true }, function (evt, name) {
    initializeData();
});

function initializeData() {
    dataJson = fs.readFile('./data/flighdata_A.xml', function (err, data) {
        parser.parseString(data, function (err, result) {
            findFlightWithMostStops(result);
            console.log('Done');
        });
    });
}

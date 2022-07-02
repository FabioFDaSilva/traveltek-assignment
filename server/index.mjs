
import fs, { appendFile } from 'fs';
import { IncomingMessage } from 'http';
import xml2js from 'xml2js';
import watch from 'node-watch';
import findFlightWithMostStops from './features/findFlightWithMostStops.mjs';
import findDayWithMostDepFrom from './features/findDayWithMostDepFrom.mjs';
import findDifferentFlightsForEachDay from "./features/findDifferentFlightsForEachDay.mjs";
import findPorpotionOfFlights from "./features/findPorpotionOfFlights.mjs";
import express from 'express';
const app = express();

let parser = new xml2js.Parser();
/// flight is misspelled as fligh on the file name
let flightData;
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
            // Read the input from result and shorten syntax for readability purposes
            flightData = result.flights.flight;
            console.log('Data loaded');
        });
    });
}

app.get('/moststops', (req, res) =>{
    res.send (findFlightWithMostStops(flightData));
})

app.get('/mostdeps', (req, res) =>{
    res.send ( findDayWithMostDepFrom(flightData, "MAN"));
})

app.get('/diffflights', (req, res) =>{
    res.send ( findDifferentFlightsForEachDay(flightData));
})

app.get('/flightpercent', (req, res) =>{
    let percentage = findPorpotionOfFlights(flightData, "Business");
    res.send (percentage.toString());
})

app.get('/curious', (req, res) =>{
    let percentage = findPorpotionOfFlights(flightData, "empty")
    res.send (percentage.toString());
})
app.listen(3000, () =>{
    console.log(`server started on port ${3000}`);
});
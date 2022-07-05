import { pushToDictionary } from "./helperFunctions.mjs";



export default function findDayWithMostDepFrom(flightData, airportCode) {
    //Create an empty dictionary, that will hold the date as a key, and the flights as values
let flightsFromAirport = {};

// declare a variable that will hold the keys with the most items inside its values
let keysWithHighestValues = [];


//function to keep it DRY, pushes a key value pair onto keysWithHighestValues
function pushThisKeyValuePair(key, value) {
    keysWithHighestValues.push({
        date: key,
        flights: value
    })
}
    flightData.forEach(flight => {
        //If it's a direct flight
        if (Object.keys(flight).length == 1) {
            // if flight has depair of airportCode
            if (flight.$.depair == airportCode) {
                pushToDictionary(flightsFromAirport, flight.$.outdepartdate, flight.$);
            };
        } else if (Object.keys(flight).length > 1) {
            // assign flight segments to a variable for readability
            let flightSegments = Object.values(flight.segments[0])[0];

            //loop through the segments
            for (let i = 0; i < flightSegments.length; i++) {
                // declare the segment as a variable for readability
                let segment = flightSegments[i].$;

                //if the depCode for this stop is the same as airportCode
                if (segment.depcode == airportCode) {
                    pushToDictionary(flightsFromAirport, segment.depdate, segment);
                }
            }
        } else {
            console.error("This entry on the flight data is corrupted (contains no information for flight)");
        }       

    });
    for (const [key, value] of Object.entries(flightsFromAirport)) {
        //if the array is empty, push the first one
        if (keysWithHighestValues.length == 0) {
            pushThisKeyValuePair(key, value);
        } else {
            //if the array isn't empty, loop through the array of keysWithHighestValues
            keysWithHighestValues.forEach(element => {
                // declare the length of the value array as a variable for readability
                let valueLengthOfArray = Object.values(element)[1].length;
                // if the length of the current value (flights from airport from this date) is higher than the current highest value
                if (value.length > valueLengthOfArray) {
                    // pop all the elements in the keysWithHighestValues
                    while (keysWithHighestValues.length > 0) {
                        keysWithHighestValues.pop();
                    }
                    // push this key value pair as the new highest
                    pushThisKeyValuePair(key, value);
                } else if (value.length == valueLengthOfArray && key != Object.keys(element)) {
                    //otherwise if they are the same, push the current key value pair as another "highest departure" item
                    pushThisKeyValuePair(key, value);
                }
            })
        }

    }
    return keysWithHighestValues;
    
}
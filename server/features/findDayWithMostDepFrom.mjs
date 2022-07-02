
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

export default function findDayWithMostDepFrom(flightDataJson, airportCode) {
    // Read the input from result and shorten syntax for readability purposes
    let flightData = flightDataJson.flights.flight;


    flightData.forEach(flight => {

        //If it's a direct flight
        if (Object.keys(flight).length == 1) {
            // assign the actual flight data as a variable for readability
            let thisFlight = Object.values(flight)[0];
            // if flight has depair of airportCode
            if (thisFlight.depair == airportCode) {
                // create a variable here to check if this date is already in use
                let isDateAlreadyInDictionary = false;
                //loop through the entries in the dictionary
                for (const [key, value] of Object.entries(flightsFromAirport)) {
                    //if the key is the same as the depart date, we can just add this flight as another item to the array of values 
                    if (key == thisFlight.outdepartdate) {
                        value.push(thisFlight);
                        // modify the bool to true, if it's already in dictionary
                        isDateAlreadyInDictionary = true;
                    }
                }

                if (!isDateAlreadyInDictionary) {
                    //create a new entry in dictionary with the date, with an array with a value of this flight
                    flightsFromAirport[thisFlight.outdepartdate] = [thisFlight];
                }
            };
        } else if (Object.keys(flight).length > 1) {
            // assign flight segments to a variable for readability
            let flightSegments = Object.values(flight.segments[0])[0];

            //loop through the segments
            for (let i = 0; i < flightSegments.length; i++) {

                // declare the segment as a variable for readability
                let segment = Object.values(flightSegments[i])[0];

                //if the depCode for this stop is the same as airportCode
                if (segment.depcode == airportCode) {
                    // create a variable here to check if this date is already in use
                    let isDateAlreadyInDictionary = false;
                    //loop through the entries in the dictionary
                    for (const [key, value] of Object.entries(flightsFromAirport)) {
                        //if the key is the same as the depart date, we can just add this flight as another item to the array of values 
                        if (key == segment.depdate) {
                            value.push(segment);
                            // modify the bool to true, if it's already in dictionary
                            isDateAlreadyInDictionary = true;
                        }
                    }

                    if (!isDateAlreadyInDictionary) {
                        //create a new entry in dictionary with the date, with an array with a value of this flight segment
                        flightsFromAirport[segment.depdate] = [segment];
                    }

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
                } else if (value.length == valueLengthOfArray) {
                    //otherwise if they are the same, push the current key value pair as another "highest departure" item
                    pushThisKeyValuePair(key, value);
                }
            })
        }

    }
    if(keysWithHighestValues.length > 1){
        console.log("The days with most departures from " + airportCode + " are: " +Object.values(keysWithHighestValues[0])[0] + " with " + Object.values(keysWithHighestValues[0])[1].length + " departures.");
    }else if (keysWithHighestValues.length == 1){
        console.log("The day with most departures from " + airportCode + " is: " +Object.values(keysWithHighestValues[0])[0] + " with " + Object.values(keysWithHighestValues[0])[1].length + " departures.");
    }
    
}
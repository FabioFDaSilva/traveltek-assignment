import { pushToDictionary } from "./helperFunctions.mjs";

export default function findDifferentFlightsForEachDay(flightData) {
    //declare a variable that will hold all the flight dates and individual flights
    let dateDictionary = {};

    flightData.forEach(flight => {
        // if the flight is a direct flight
        if (Object.keys(flight).length == 1) {
            pushToDictionary(dateDictionary, flight.$.outdepartdate, flight.$);
        }
        else if (Object.keys(flight).length > 1) {
            // assign flight segments to a variable for readability
            let flightSegments = Object.values(flight.segments[0])[0];

            //loop through the segments
            for (let i = 0; i < flightSegments.length; i++) {
                // declare the segment as a variable for readability
                let segment = flightSegments[i].$;
                // push to dictionary
                pushToDictionary(dateDictionary, segment.depdate, segment);
            }
        } else {
            console.error("This entry on the flight data is corrupted (contains no information for flight)");
        }
    })
    console.log("List of all the flight days of 2018:");
    console.log("====================================");
    for (const [key, value] of Object.entries(dateDictionary)){
        console.log(key);
        console.log(value.length);
    }
    console.log("====================================");

}
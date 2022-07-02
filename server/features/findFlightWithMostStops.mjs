export default function findFlightWithMostStops(flightData) {
    // declare empty array that hold the flights with most stops, because there could potentially be a tie
    let flightsWithMostStops = [];

    flightData.forEach(flight => {
        // if segments are less than 1, there's no stops on this flight, skip code
        if (Object.keys(flight).length > 1) {
            
            // declare income and outgoing stops. could be useful if we need to distinguish between them
            let outgoingStopsOnFlight = [];
            let incomingStopsOnFlight = [];
            // if flightWithMostStops is empty, means none have been assigned yet, so go ahead and assign them
            if (flightsWithMostStops.length < 1) {
                flightsWithMostStops.push(flight);
            }
            // assign number of flights with most stops to a variable for readability
            let mostStopsLength = Object.values(flightsWithMostStops[0].segments[0])[0].length;
            // assign flight segments to a variable for readability
            let flightSegments = Object.values(flight.segments[0])[0];

            //loop through the segments
            for(let i = 0; i < flightSegments.length; i++ ){
                
                // declare the segment as a variable for readability
                let segment = Object.values(flightSegments[i])[0];

                //if it's an outward trip, add it to the outgoing flight segments of this trip
                if(segment.journey == "out"){
                    outgoingStopsOnFlight.push(segment);
                    
                }//otherwise add it to the incoming
                else if (segment.journey == "in"){
                    incomingStopsOnFlight.push(segment);
                }
            }


            // add the segments together, to reach a total number of segments
            let stopsThisFlight = incomingStopsOnFlight.length + outgoingStopsOnFlight.length;
            
            //if the stops from this flight is higher than the one with most stops (regardless of the position in the array)
            if(stopsThisFlight > mostStopsLength){
                // pop all of the current items in the array
                while(flightsWithMostStops.length > 0){
                    flightsWithMostStops.pop();
                }
                // then push the flight
                flightsWithMostStops.push(flight);
            }

            //otherwise simply push to the array
            if (stopsThisFlight == mostStopsLength){
                flightsWithMostStops.push(flight);
            }

        
        }
    })
    return flightsWithMostStops;
}

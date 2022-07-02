import { pushToDictionary } from "./helperFunctions.mjs";

export default function findPorpotionOfFlights(flightData, flightClass){
    // declare a dictionary that will hold all the different flight classes and their flights
    let classesDictionary = {};

    flightData.forEach(flight => {
        // if it's a direct flight, push to dictionary
        if (Object.keys(flight).length == 1) {
            pushToDictionary(classesDictionary, flight.$.outflightclass, flight.$);
        }else if (Object.keys(flight).length > 1) {// if it's a segmented flight
            
            //declare variables to hold the inbound and outbound flight classes
            let inboundClass = flight.$.inflightclass;
            let outboundClass = flight.$.outboundclass;

            let flightSegments = Object.values(flight.segments[0])[0];
            //loop through the segments
            for (let i = 0; i < flightSegments.length; i++) {
                // declare the segment as a variable for readability
                let segment = flightSegments[i].$;
               // if the segment has no class (probably means inherits from parent)
                if(!segment.class)
                {    // if the segment journey is inbound
                    if(segment.journey == "in"){
                        // push to dictionary with the inbound flight class
                        pushToDictionary(classesDictionary, inboundClass, segment);
                    }else if (segment.journey == "out"){
                        //else push to dictionary with the oubound flight class
                        pushToDictionary(classesDictionary, outboundClass, segment);
                    }
                }else{
                    pushToDictionary(classesDictionary, segment.class, segment);
                }
               
            }
        }else {
            console.error("This entry on the flight data is corrupted (contains no information for flight)");
        }
    });

    let totalFlights = 0;
    let totalBusinessClassFlights;
    let totalUnclassedFlights;
    for(const key in classesDictionary){
        
        totalFlights += classesDictionary[key].length;
        if(key == flightClass){
            totalBusinessClassFlights = classesDictionary[key].length;
        }else if (!key){
            totalUnclassedFlights = classesDictionary[key].length;
        }
    }

    console.log("percentage of " + flightClass + " class flights is " + ((totalBusinessClassFlights / totalFlights) * 100)+ "%" );
    console.log("There are also flights which have no class, these make up "+ ((totalUnclassedFlights / totalFlights) * 100)+ "% of all flights in 2018");
}
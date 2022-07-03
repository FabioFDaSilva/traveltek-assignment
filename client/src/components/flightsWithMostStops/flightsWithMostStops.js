import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectFlightsWithMostStops } from "./flightsWithMostStopsSlice";



const FlightsWithMostStops = () => {
    const currentFlights = useSelector(selectFlightsWithMostStops);
    //const currentStoredFlights = JSON.stringify(currentFlights);
    let isUpdated = false;
    function displayMainText() {
        console.log(currentFlights[0]);
        if (currentFlights.length > 1) {
            return <h2>{currentFlights.length} Flights with the most stops</h2>
        } else {
            return (
                <div>
                    <h2>1 Flight with the most stops</h2>
                    <h2>{currentFlights}</h2>
                </div>
            )
        }
    }
    function displayFlights(data) {
        return (
            data.map((flight, i) => (
                <li key={flight.$.id}>
                    <div>
                        <h3>Stops On this Flight: {flight.segments[0].segment.length}</h3>
                        <p>Flight ID: {flight.$.id} </p>
                        <p>Flight Departure Airport: {flight.$.depair}</p>
                        <p>Flight Destination Airport: {flight.$.destair}</p>
                        <p>Flight Departure Date: {flight.$.outdepartdate}</p>
                        <p>Flight Arrival Date: {flight.$.inarrivaldate}</p>
                        <br />
                    </div>

                </li>)))
    }
    const dispatch = useDispatch();
    const getFlights = async () => {
        try {
            const response = await fetch("/api/moststops");
            const tojson = await response.json();
            dispatch(updateList(tojson));
            isUpdated = true;
        } catch (err) {
            console.error(err.message);
        }
        

    }

    useEffect(() => {
        getFlights();
    })

    return (
        <div>
            {isUpdated ? displayMainText() : <div>Loading...</div>}
            {isUpdated ? displayFlights(currentFlights) : <br/>}
        </div>
    )
}

export default FlightsWithMostStops
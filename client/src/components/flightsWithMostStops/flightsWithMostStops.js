import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectFlightsWithMostStops } from "./flightsWithMostStopsSlice";



const FlightsWithMostStops = () => {
    const currentFlights = useSelector(selectFlightsWithMostStops);
    //const currentStoredFlights = JSON.stringify(currentFlights);
    function displayMainText() {
        if (currentFlights.length > 1) {
            return (
                <div>
                    <h2 className="text-center">Most Stops: {currentFlights[0].segments[0].segment.length} </h2>

                    <h2 className="text-center">{currentFlights.length} Flights</h2>
                </div>
            )
        } else if (currentFlights.length === 1) {
            return (
                <div>
                    <h2 className="text-center">Most Stops: {currentFlights[0].segments[0].segment.length} stops</h2>

                    <h2 className="text-center">1 Flight</h2>
                </div>
            )
        }
    }
    function displayFlights(data) {

        return (
            data.map((flight, i) => (
                <div key={flight.$.id}>
                    <div>
                        <h3>ID: {flight.$.id} </h3>
                        <p>Departure Airport: {flight.$.depair}</p>
                        <p>Destination Airport: {flight.$.destair}</p>
                        <p>Departure Date: {flight.$.outdepartdate}</p>
                        <p>Arrival Date: {flight.$.inarrivaldate}</p>
                    </div>

                </div>)))
    }
    const dispatch = useDispatch();
    const getFlights = async () => {
        try {
            const response = await fetch("/api/moststops");
            const tojson = await response.json();
            dispatch(updateList(tojson));

        } catch (err) {
            console.error(err.message);
        }


    }

    useEffect(() => {
        getFlights();
    })

    return (
        <div>
            {currentFlights ? displayMainText() : <div>Loading...</div>}
            {currentFlights ? (
                <div>
                    {displayFlights(currentFlights)}
                </div>
            ) : <br />}
        </div>
    )
}

export default FlightsWithMostStops
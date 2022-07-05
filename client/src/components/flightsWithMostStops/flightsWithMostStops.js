import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectFlightsWithMostStops } from "./flightsWithMostStopsSlice";
import styles from "./flightsWithMostStops.module.scss";


const FlightsWithMostStops = () => {
    const currentFlights = useSelector(selectFlightsWithMostStops);
    //const currentStoredFlights = JSON.stringify(currentFlights);
    function displayMainText() {
        if (currentFlights.length > 1) {
            return (
                <div>
                    <h2 className={styles.stopCount}>{currentFlights.length} Flights  with {currentFlights[0].segments[0].segment.length} stops</h2>
                </div>
            )
        } else if (currentFlights.length === 1) {
            return (
                <div>
                    <h2 className="text-center">1 Flight with {currentFlights[0].segments[0].segment.length} stops</h2>
                </div>
            )
        }
    }
    function displayFlights(data) {

        return (
            <div className={styles.flightsGrid}>
                {data.map((flight, i) => (
                <div className={styles.flightContainer} key={flight.$.id}>
                    <div className={styles.id}>#{flight.$.id} </div>
                    <div className={styles.flightDetails}>
                        <div className={styles.source}>
                            <div className={styles.depAir}>{flight.$.depair}</div>
                            <div>{flight.$.outdeparttime}</div>
                            <div className={styles.depDate}>{flight.$.outdepartdate}</div>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                        <div className={styles.destination}>
                            <div className={styles.destAir}> {flight.$.destair} </div>
                            <div>{flight.$.inarrivaltime}</div>
                            <div className={styles.arrDate}>{flight.$.inarrivaldate}</div>
                        </div>
                    </div>

                </div>))}
            </div>)
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
    }, []);

    return (
        <div>
            {currentFlights ? displayMainText() : <div>Loading...</div>}
            {currentFlights ? displayFlights(currentFlights) : <br />}
        </div>
    )
}

export default FlightsWithMostStops
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectFlightsFromDays } from "./flightsFromDaySlice";

const FlightsFromDay = () => {
    const currentDays = useSelector(selectFlightsFromDays);
    const dispatch = useDispatch();
    const getDays = async () => {
        try {
            const response = await fetch("/api/diffflights");
            const tojson = await response.json();
            dispatch(updateList(tojson));

        } catch (err) {
            console.error(err.message);
        }


    }
    function displayFlights(data) {
        return Object.values(data).map((element, i) => (
            <div className="d-flex justify-content-center p-2 col-md-6 col-xl-2 col-lg-4" key={i}>
                <div className="flex-column">
                    <h1>{Object.keys(data)[i]}</h1>
                    <h3>{element.length} Flights</h3>
                </div>

            </div>));
    }

    useEffect(() => {
        getDays();
    }, []);

    return (
        <div>
            {currentDays ? (

                <div className="text-center mt-5"></div>
            ) : <br />}
            {currentDays ? displayFlights(currentDays) : <div>Loading...</div>}
        </div>
    )
}

export default FlightsFromDay
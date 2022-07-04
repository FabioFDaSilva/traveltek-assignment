import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectDaysWithMostFlights } from "./daysWithMostFlightsSlice";

const DayWithMostFlights = () => {
    const currentDays = useSelector(selectDaysWithMostFlights);
    //const currentStoredFlights = JSON.stringify(currentDays);
    function displayMainText(data) {
        if (data.length > 1) {
            return (
                <div>
                    <h2 className="text-center">There are {currentDays.length} days with the most departures out of Manchester </h2>
                </div>
            )
        } else if (data.length === 1) {
            return (
                
                <h3 className=" text-center">{currentDays[0].date} is the day with most flights out of Manchester with {data[0].flights.length} </h3>
            )
        }
    }
    const dispatch = useDispatch();
    const getDays = async () => {
        try {
            const response = await fetch("/api/mostdeps/MAN");
            const tojson = await response.json();
            dispatch(updateList(tojson));

        } catch (err) {
            console.error(err.message);
        }


    }

    useEffect(() => {
        getDays();
    }, []);

    return (
        <div>
            {currentDays ? (

                <div className="text-center mt-5"></div>
            ) : <br />}
            {currentDays ? displayMainText(currentDays) : <div>Loading...</div>}
        </div>
    )
}

export default DayWithMostFlights
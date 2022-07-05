import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectDaysWithMostFlights } from "./daysWithMostFlightsSlice";
import styles from './daysWithMostFlights.module.scss';

const DayWithMostFlights = () => {
    const currentDays = useSelector(selectDaysWithMostFlights);
    //const currentStoredFlights = JSON.stringify(currentDays);
    function displayMainText(data) {
        if (data.length > 1) {
            return (
                <div>
                    <h2 className={styles.mainText}>There are {currentDays.length} days with the most departures out of Manchester </h2>
                </div>
            )
        } else if (data.length === 1) {
            return (
                
                <h3 className={styles.mainText}>{currentDays[0].date} is the day with most departures out of Manchester with {data[0].flights.length} flights </h3>
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
            {currentDays.length > 0 ? displayMainText(currentDays) : <div>Loading...</div>}
        </div>
    )
}

export default DayWithMostFlights
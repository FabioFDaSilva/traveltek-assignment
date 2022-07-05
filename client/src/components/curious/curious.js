import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectCurious } from "./curiousSlice";
import styles from './curious.module.scss';

const Curious = () => {
    const currentCurious = useSelector(selectCurious);
    //const currentStoredFlights = JSON.stringify(currentDays);
    function displayMainText(data) {
        return (
            <div>
                <h1 className={styles.mainText}>Curious Fact</h1>
                <h2 className={styles.mainText}>On this data file, { data.toFixed(2)} % of all flights didn't have a flight class... Did a major bug happen? Or is there something i don't know about </h2>
            </div>
        )
    }
    const dispatch = useDispatch();
    const getCurious = async () => {
        try {
            const response = await fetch("/api/flightpercent/empty");
            const tojson = await response.json();
            dispatch(updateList(tojson));

        } catch (err) {
            console.error(err.message);
        }


    }

    useEffect(() => {
        getCurious();
    }, []);

    return (
        <div>
            {currentCurious ? (

                <div className="text-center mt-5"></div>
            ) : <br />}
            {currentCurious > 0 ? displayMainText(currentCurious) : <div>Loading...</div>}
        </div>
    )
}

export default Curious
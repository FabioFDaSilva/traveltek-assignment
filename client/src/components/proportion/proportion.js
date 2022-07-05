import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateList, selectProportion } from "./proportionSlice";
import styles from './proportion.module.scss'

const Proportion = () => {
    const currentProportion = useSelector(selectProportion);
    //const currentStoredFlights = JSON.stringify(currentDays);
    function displayMainText(data) {
            return <h2 className={styles.mainText}>The current proportion of "Business" flights is {data.toFixed(2)} % </h2>
    }
    const dispatch = useDispatch();
    const getProportion = async () => {
        try {
            const response = await fetch("/api/flightpercent/Business");
            const tojson = await response.json();
            dispatch(updateList(tojson));

        } catch (err) {
            console.error(err.message);
        }


    }

    useEffect(() => {
        getProportion();
    }, []);

    return (
        <div>
            {currentProportion ? (

                <div className="text-center mt-5"></div>
            ) : <br />}
            {currentProportion > 0 ? displayMainText(currentProportion) : <div>Loading...</div>}
        </div>
    )
}

export default Proportion
import React from 'react'
import styles from "./navbar.module.scss";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={styles.container}>
            {/* <h1 className="d-flex justify-content-center bg-info">TravelTek Assignment</h1> */}
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/moststops">Most Stops Flight</NavLink></li>
                <li><NavLink to="/mostdeps">Most Daily Outbounds "Manchester"</NavLink></li>
                <li><NavLink to="/diffflights">Daily Flight Count</NavLink></li>
                <li><NavLink to="/flightpercent">Business Flights %</NavLink></li>
                <li><NavLink to="/curious">Curious Fact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
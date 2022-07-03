import React from 'react'
import "./navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1 className="d-flex justify-content-center bg-info">TravelTek Assignment</h1>
                <ul className="d-flex justify-content-around">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/moststops"><li>Flight With Most Stops</li></Link>
                    <Link to="/mostdeps"><li>Day With Most Outbound Flights From Manchester</li></Link>
                    <Link to="/diffflights"><li>Flights From Each Day</li></Link>
                    <Link to="/flightpercent"><li>Proportion Of Business Flights</li></Link>
                    <Link to="/curious"><li>Curious Fact</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
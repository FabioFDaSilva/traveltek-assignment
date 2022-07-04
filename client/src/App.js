import React from 'react';
import Navbar from './components/navbar/navbar.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/home.js';
import Curious from './components/curious/curious.js';
import DayWithMostFlights from './components/dayWithMostFlights/daysWithMostFlights.js';
import FlightsWithMostStops from './components/flightsWithMostStops/flightsWithMostStops.js';
import FlightsFromDay from './components/flightsFromDay/flightsFromDay.js';
import Proportion from './components/proportion/proportion.js';
import styles from "./App.module.scss";

function App() {
  console.log(styles);
  console.log(styles.container);
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moststops" element={<FlightsWithMostStops />} />
            <Route path="/mostdeps" element={<DayWithMostFlights />} />
            <Route path="/diffflights" element={<FlightsFromDay />} />
            <Route path="/flightpercent" element={<Proportion />} />
            <Route path="/curious" element={<Curious />} />
          </Routes>
        </div>

      </BrowserRouter >
    </div>

  )
}

export default App;

import React from 'react';
import Navbar from './components/navbar/navbar.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/home.js';
import Curious from './components/curious/curious.js';
import DayWithMostFlights from './components/dayWithMostFlights/dayWithMostFlights.js';
import FlightsWithMostStops from './components/flightsWithMostStops/flightsWithMostStops.js';
import FlightsFromDay from './components/flightsFromDay/flightsFromDay.js';
import Proportion from './components/proportion/proportion.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moststops" element={<FlightsWithMostStops />} />
        <Route path="/mostdeps" element={<DayWithMostFlights />} />
        <Route path="/diffflights" element={<FlightsFromDay />} />
        <Route path="/flightpercent" element={<Proportion />} />
        <Route path="/curious" element={<Curious />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;

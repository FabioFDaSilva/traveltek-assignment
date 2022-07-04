import { configureStore } from '@reduxjs/toolkit';
import flightsWithMostStopsReducer from '../components/flightsWithMostStops/flightsWithMostStopsSlice';
import daysWithMostFlightsReducer from '../components/dayWithMostFlights/daysWithMostFlightsSlice';
import flightsFromDaysReducer from '../components/flightsFromDay/flightsFromDaySlice';
import proportionReducer from '../components/proportion/proportionSlice';
import curiousReducer from '../components/curious/curiousSlice';

export const store = configureStore({
  reducer: {
    flightsWithMostStops: flightsWithMostStopsReducer,
    daysWithMostFlights: daysWithMostFlightsReducer,
    flightsFromDays: flightsFromDaysReducer,
    proportion: proportionReducer,
    curious: curiousReducer
  },
});
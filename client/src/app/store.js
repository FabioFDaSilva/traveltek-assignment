import { configureStore } from '@reduxjs/toolkit';
import flightsWithMostStopsReducer from '../components/flightsWithMostStops/flightsWithMostStopsSlice';

export const store = configureStore({
  reducer: {
    flightsWithMostStops: flightsWithMostStopsReducer,
  },
});
import { createSlice } from "@reduxjs/toolkit"

export const flightsWithMostStopsSlice = createSlice({
    name: "flightWithMostStops",
    initialState: {
        list: []
    },
    reducers: {
        updateList: (state, action) =>{
            state.list = action.payload;
        }
    }
})


export const selectFlightsWithMostStops = (state) => state.flightsWithMostStops.list;
export const {updateList} = flightsWithMostStopsSlice.actions;
export default flightsWithMostStopsSlice.reducer;
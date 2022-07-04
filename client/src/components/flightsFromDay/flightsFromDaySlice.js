import { createSlice } from "@reduxjs/toolkit"

export const flightsFromDaySlice = createSlice({
    name: "flightsFromDay",
    initialState: {
        list: []
    },
    reducers: {
        updateList: (state, action) =>{
            state.list = action.payload;
        }
    }
})


export const selectFlightsFromDays = (state) => state.flightsFromDays.list;
export const {updateList} = flightsFromDaySlice.actions;
export default flightsFromDaySlice.reducer;
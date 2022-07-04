import { createSlice } from "@reduxjs/toolkit"

export const daysWithMostFlightsSlice = createSlice({
    name: "dayWithMostFlights",
    initialState: {
        list: []
    },
    reducers: {
        updateList: (state, action) =>{
            state.list = action.payload;
        }
    }
})


export const selectDaysWithMostFlights = (state) => state.daysWithMostFlights.list;
export const {updateList} = daysWithMostFlightsSlice.actions;
export default daysWithMostFlightsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

export const proportionSlice = createSlice({
    name: "proportion",
    initialState: {
        list: []
    },
    reducers: {
        updateList: (state, action) =>{
            state.list = action.payload;
        }
    }
})


export const selectProportion = (state) => state.proportion.list;
export const {updateList} = proportionSlice.actions;
export default proportionSlice.reducer;
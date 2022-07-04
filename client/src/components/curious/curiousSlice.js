import { createSlice } from "@reduxjs/toolkit"

export const curiousSlice = createSlice({
    name: "curious",
    initialState: {
        list: []
    },
    reducers: {
        updateList: (state, action) =>{
            state.list = action.payload;
        }
    }
})


export const selectCurious = (state) => state.curious.list;
export const {updateList} = curiousSlice.actions;
export default curiousSlice.reducer;
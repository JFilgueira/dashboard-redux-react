import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { title: '', content: ''};

export const postSlice = createSlice({
    name: "post",
    initialState: { value:  initialStateValue},
    reducers: {
        createPost: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { createPost } = postSlice.actions;

export default postSlice.reducer;
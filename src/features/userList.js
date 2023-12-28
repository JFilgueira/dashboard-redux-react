import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
    { name: 'Marcus', email: 'marcus@email.com', role: 'editor', id: 1 },
    { name: 'John', email: 'john@email.com', role: 'regular', id: 2 },
    { name: 'Diana', email: 'diana@email.com', role: 'regular', id: 3 },
    { name: 'Peter', email: 'peter@email.com', role: 'editor', id: 4 },
    { name: 'Ana', email: 'ana@email.com', role: 'regular', id: 5 },
    { name: 'Mary', email: 'mary@email.com', role: 'admin', id: 6 },
    { name: 'Luke', email: 'luke@email.com', role: 'regular', id: 7 },
];

export const userListSlice = createSlice({
    name: "userList",
    initialState: { value: initialStateValue },
    reducers: {
        editList: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { editList } = userListSlice.actions;

export default userListSlice.reducer;
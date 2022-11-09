import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    emails: ['danny@gmail.com', 'hermoso@gmail.com']
}

const emailSlice = createSlice({
    name: 'emails',
    initialState, 
    reducers: {
        newEmail(state, action) {
            state.emails.push(action.payload)
        }
    }
})

export const {
    newEmail
} =emailSlice.actions

export default emailSlice.reducer
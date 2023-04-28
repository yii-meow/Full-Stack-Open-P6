import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: ""
    },
    reducers: {
        createNotification(state, action) {
            state.message = action.payload
        },
        removeNotification(state, action) {
            state.message = ""
        }
    }
})

export const { createNotification, removeNotification } = notificationSlice.actions

export default notificationSlice.reducer
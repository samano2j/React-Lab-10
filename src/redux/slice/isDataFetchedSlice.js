import { createSlice } from '@reduxjs/toolkit'

const isDataFetchedSlice = createSlice({
    name: 'isDataFetched',
    initialState: false,
    reducers: {
        setIsDataFetched: (state, action) => true
    }
})

export const { setIsDataFetched } = isDataFetchedSlice.actions
export default isDataFetchedSlice.reducer
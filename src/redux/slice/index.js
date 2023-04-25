import { combineReducers } from 'redux'

import mainSliceReducer from './mainSlice'
import isDataFetchedSliceReducer from './isDataFetchedSlice'

export const rootReducer = combineReducers({
    oyatsu: mainSliceReducer,
    isDataFetched: isDataFetchedSliceReducer
})
import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filters/filtersSlice'

export default configureStore({
  reducer: {
    filters: filtersReducer, 
  },
})
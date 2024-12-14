import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const disasterSlice = createSlice({
  name: 'activeDisaster',
  initialState: {
    disaster : null,
    responsePlan : [],
    situationReports : [],
  },
  reducers: {
    setActiveDisaster: (state, action: PayloadAction<any>) => {
      return state = action.payload;
    },
    editResponsePlan : (state, action: PayloadAction<any>) => {
      return state = {...state, responsePlan: action.payload};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveDisaster, editResponsePlan } = disasterSlice.actions

export default disasterSlice.reducer
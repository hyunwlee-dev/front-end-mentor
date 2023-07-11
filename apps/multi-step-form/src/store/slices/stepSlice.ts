import { createSlice } from '@reduxjs/toolkit';

const stepSlice = createSlice({
  name: 'step',
  initialState: 0,
  reducers: {
    nextStep: state => {
      return state + 1;
    },
    previousStep: state => {
      return state - 1;
    },
    jumpToPlanForm: _ => {
      return 1;
    },
  },
});

export default stepSlice;
export const { nextStep, previousStep, jumpToPlanForm } = stepSlice.actions;

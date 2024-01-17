// src/features/flightBookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const flightBookingSlice = createSlice({
  name: 'flightBooking',
  initialState: {
    title: '',
    fullName: '',
    passportNumber: '',
    selectedAirline: '',
    flightTime: '',
    destinations: [], // Initialize destinations as an empty array
    flightDate: '',
  },
  reducers: {
    setFormValues: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: (state) => {
      return {
        title: '',
        fullName: '',
        passportNumber: '',
        selectedAirline: '',
        flightTime: '',
        destinations: [], // Reset destinations to an empty array
        flightDate: '',
      };
    },
  },
});

export const { setFormValues, resetForm } = flightBookingSlice.actions;
export default flightBookingSlice.reducer;

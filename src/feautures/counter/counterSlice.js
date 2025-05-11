import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    userId: localStorage.getItem('userId') || null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      
    },
    updateUserId: (state, action) => {
      state.userId = action.payload
    }


  },
});

export const { increment, decrement, incrementByAmount, updateUserId } = counterSlice.actions;

export default counterSlice.reducer;

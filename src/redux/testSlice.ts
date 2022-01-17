import {createSlice} from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    init: state => {
      state = 0;
    },
  },
});

export const {init} = testSlice.actions;

export default testSlice.reducer;

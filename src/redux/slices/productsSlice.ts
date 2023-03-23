import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;

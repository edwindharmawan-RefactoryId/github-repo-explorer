import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: ''
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload
    },
  }
});

// this is for dispatch
export const { login } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
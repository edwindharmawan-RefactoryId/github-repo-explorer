import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchUsername: '',
  repos: [],
  users: [],
}

export const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setSearchUsername: (state, action) => {
      state.searchUsername = action.payload
    },
    setRepos: (state, action) => {
      state.repos = action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
  }
});

// this is for dispatch
export const {
  setSearchUsername,
  setRepos,
  setUsers
} = repoSlice.actions;

// this is for configureStore
export default repoSlice.reducer;
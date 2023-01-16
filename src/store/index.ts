import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user'
import repoReducer from './repos'

export default configureStore({
  reducer: {
    user: userReducer,
    repos: repoReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/usersSlice';
import authenticationReducer from './authentication/authenticationSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    authentication: authenticationReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import currentUserReducer from './currentUser/currentUserSlice';

export default configureStore({
    reducer: {
        users: usersReducer,
        currentUser: currentUserReducer,
    },
});

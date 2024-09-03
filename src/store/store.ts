import { configureStore } from '@reduxjs/toolkit';

import initialState from './initialState.ts';
import usersReducer from './reducer.ts';

// Configuring the Redux store
export const store = configureStore({
    reducer: {
        result: usersReducer,
    },
    preloadedState: {
        result: initialState,
    },
});

// Types for RootState and AppDispatch to be used across the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

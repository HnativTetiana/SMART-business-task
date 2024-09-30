import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState.ts";
import { setUsers, setFilters, setError } from './actions.ts';
import { User, Filters } from '../components/Interfaces.ts';

// Creating a reducer to handle user-related actions
const usersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUsers, (state, action: PayloadAction<User[] | null>) => {
            // Setting users and clearing any previous errors
            state.result = { users: action.payload, error: null };
            state.filteredUsers = action.payload || [];
        })

        .addCase(setFilters, (state, action: PayloadAction<Filters>) => {
            // Applying filters to the list of users
            const { name, username, email, phone } = action.payload || {};
            state.filters = action.payload;
            state.filteredUsers = (state.result.users || []).filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase()) &&
                user.username.toLowerCase().includes(username.toLowerCase()) &&
                user.email.toLowerCase().includes(email.toLowerCase()) &&
                user.phone.toLowerCase().includes(phone.toLowerCase())
            );
        })

        .addCase(setError, (state, action: PayloadAction<string | null>) => {
            // Setting error in the state
            state.result = { users: null, error: action.payload };
        })
});

export default usersReducer;

import { createAction } from "@reduxjs/toolkit";
import { User, Filters } from "../components/Interfaces";

// Action to set users in the state
export const setUsers = createAction<User[]>('users/setUsers');

// Action to set filters in the state
export const setFilters = createAction<Filters>('users/setFilters');

// Action to set an error message in the state
export const setError = createAction<string | null>('users/setError');

import { RootState } from './store.ts';

// Selector to get the result (users and error) from the state
export const selectResult = (state: RootState) => state.result.result;

// Selector to get filtered users
export const selectFilteredUsers = (state: RootState) => state.result.filteredUsers;

// Selector to get filters
export const selectFilters = (state: RootState) => state.result.filters;

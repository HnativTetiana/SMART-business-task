import React from 'react';
import Filters from './components/Filters.tsx';
import UsersTable from './components/Users.tsx';
import useFetchUsers from './hooks/useFetchUsers.ts';
import useFilters from './hooks/useFilters.ts';
import './styles/App.css';

// Main app component
const App = () => {
  const { users, error } = useFetchUsers('https://jsonplaceholder.typicode.com/users'); // Fetching users data

  const { filteredUsers, changeFieldsValue } = useFilters(); // Handling filters

  return (
    <div className='main-container'>
      <h1 className='main-title'>User Management</h1>
      <Filters changeFieldsValue={changeFieldsValue}></Filters>
      {
        error && <h2 className='error-message'>Error: {error}</h2>
      }
      {
        users && <UsersTable users={filteredUsers || []}></UsersTable>
      }
    </div>
  );
}

export default App;

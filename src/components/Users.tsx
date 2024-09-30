import React from 'react';
import { User } from './Interfaces';

// Component to display a table of users
const UsersTable: React.FC<{ users: User[] }> = ({ users }) => {
    return (
        <>
            {
                users?.length ?
                    <div className='table-container'>
                        <table className='users-table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    : <h2 className='no-user-title'>The users with such parameters do not exist</h2> // Message when no users are found
            }
        </>
    );
}

export default UsersTable;

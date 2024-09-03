import React from 'react';
import { User } from './Interfaces';

// Component to display a table of users
const UsersTable = ({ users }: { users: User[] }) => {
    return (
        <div className='table-container'>
            {
                users?.length ?
                    <table className='users-table'>
                        <caption className='table-title'>User Management Table</caption>
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

                    : <h2>The users with such parameters do not exist</h2> // Message when no users are found
            }
        </div>
    );
}

export default UsersTable;

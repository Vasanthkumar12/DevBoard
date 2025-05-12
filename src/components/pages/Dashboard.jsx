import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext';

export const Dashboard = () => {
    const { user, logout } = useContext(AuthContext)

    useEffect(() => {
        console.log('Dashboard rendered');
    }, []);

  return (
    <div>
        <div style={{ padding: '2rem' }}>
            <h2>Welcome, {user?.name}</h2>
            <p>Email: {user?.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

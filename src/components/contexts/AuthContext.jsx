// 1st step is create a Auth Context

import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const login = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      setUser(res.data)
      console.log(res.data, 'user')
      navigate('/dashboard')
    }
    catch (err) {
      console.log('Login failed', err)
    }
    
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

// 2nd step is go and wrap your App component by using <AuthProvider>

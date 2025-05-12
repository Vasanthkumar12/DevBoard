// 1st step is create a Auth Context

import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState('')

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

// 2nd step is go and wrap your App component by using <AuthProvider>

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { PrivateRoute } from './components/PrivateRoute'
import { Dashboard } from './components/pages/Dashboard'
import { Login } from './components/pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>} />  
      </Routes>      
    </>
  )
}

export default App

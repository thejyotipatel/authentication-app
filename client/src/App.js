import EditProfile from './pages/EditProfile'
import Profile from './pages/Profile'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
const initState = {
  user: '',
}
function App() {
  const [profile, setProfile] = useState(initState)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path='/'
          element={profile.user ? <Navigate to='/profile' /> : <Register />}
        />
        <Route
          path='/profile'
          element={
            profile.user ? <Profile profile={profile} /> : <Navigate to='/' />
          }
        />
        <Route
          path='/edit-profile'
          element={
            profile.user ? (
              <EditProfile profile={profile} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

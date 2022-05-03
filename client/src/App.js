import Profile from './pages/Profile'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      fetch('/protected', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Contant-Type': 'application/json',
          'Access-Control-Allow-credentials': true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json()
          throw new Error('auth error')
        })
        .then((res) => {
          setProfile(res.user)
        })
        .catch((e) => console.log(e))
    }
    getUser()
  }, [])
  console.log(profile)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path='/'
          element={profile ? <Navigate to='/profile' /> : <Register />}
        />
        <Route
          path='/profile'
          element={profile ? <Profile {...profile} /> : <Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

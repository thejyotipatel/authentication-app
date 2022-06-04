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
<<<<<<< HEAD
=======
  console.log(profile)
  // console.log(Object.keys(profile))
>>>>>>> 618317b8470e26e902f2010ce4a4e770851afa98
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
          element={
            profile ? (
<<<<<<< HEAD
              <Profile profile={profile} setProfile={setProfile} />
=======
              <Profile {...profile} profile={profile} setProfile={setProfile} />
>>>>>>> 618317b8470e26e902f2010ce4a4e770851afa98
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

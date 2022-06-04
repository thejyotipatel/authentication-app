import { Link } from 'react-router-dom'
<<<<<<< HEAD
const Profile = ({ setProfile, profile }) => {
=======

const Profile = ({ displayName, email, photos, bio, setProfile, profile }) => {
>>>>>>> 618317b8470e26e902f2010ce4a4e770851afa98
  const logout = async () => {
    fetch('/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Contant-Type': 'application/json',
        'Access-Control-Allow-credentials': true,
      },
    })
      .then((res) => {
        if (res.status === 200) return
        throw new Error('auth error')
      })
      .then((res) => {
        setProfile(null)
      })
      .catch((e) => console.log(e))
  }
<<<<<<< HEAD
=======
  const jsonKeys = Object.keys(profile)
  const jsonValue = Object.values(profile)
  console.log(Object.values(profile))
>>>>>>> 618317b8470e26e902f2010ce4a4e770851afa98
  return (
    <>
      <header>Personal details</header>
      <div className='details'>
        <img src={photos[0].value} alt='img' />
        <p className='name'> {displayName}</p>
        <p className='bio'>{bio ? bio : 'Hi, there 👋'}</p>

        <p className='email'> {email ? email : ''}</p>

        <Link to='/' className='edit-btn' onClick={logout}>
          LogOut
        </Link>
      </div>
<<<<<<< HEAD
=======
      <div>
        <tbody>
          {jsonKeys.map((item, index) => {
            return <th key={index}>{item}</th>
          })}
          {/* {jsonValue.map((item, index) => {
            return <td key={index}>{item}</td>
          })} */}
        </tbody>
      </div>
>>>>>>> 618317b8470e26e902f2010ce4a4e770851afa98
    </>
  )
}

export default Profile

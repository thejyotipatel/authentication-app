import { Link } from 'react-router-dom'

const Profile = ({ displayName, email, photos, bio }) => {
  return (
    <>
      <header>Personal details</header>
      <div className='details'>
        <img src={photos[0].value} alt='img' />
        <p className='name'> {displayName}</p>
        <p className='bio'>{bio ? bio : 'Hi, there 👋'}</p>

        <p className='email'> {email ? email : ''}</p>

        <Link to='/' className='edit-btn'>
          LogOut
        </Link>
      </div>
    </>
  )
}

export default Profile

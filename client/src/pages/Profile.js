import { Link } from 'react-router-dom'

const Profile = ({ name, email, picture, bio }) => {
  return (
    <>
      <button className='info-btn'>
        <span>!</span>
      </button>
      <header>Personal details</header>
      <div className='details'>
        <img src={picture} alt='img' />
        <p className='name'> {name}</p>
        <p className='bio'>{bio ? bio : 'Hi, there.'}</p>

        {/* <p className='phone-number'> </p> */}
        <p className='email'> {email}</p>

        <Link to='/edit-profile' className='edit-btn'>
          Edit profile
        </Link>
      </div>
    </>
  )
}

export default Profile

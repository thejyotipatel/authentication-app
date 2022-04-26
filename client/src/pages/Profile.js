import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <button className='info-btn'>
        <span>!</span>
      </button>
      <header>Personal details</header>
      <div className='details'>
        <div className='left'>
          <img src='' alt='img' />
          <p className='name'>maya thethreedragens</p>
          <p className='bio'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            laboriosam vel tenetur? Voluptatum.
          </p>
        </div>
        <div className='right'>
          <p className='address'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            dolores id? Esse, aut nisi.
          </p>
          <p className='phone-number'>1234567890</p>
          <p className='email'>maya@gmail.com</p>
        </div>
      </div>
      <Link to='/edit-profile' className='edit-btn'>
        Edit profile
      </Link>
    </>
  )
}

export default Profile

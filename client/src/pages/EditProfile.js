import { useState } from 'react'
import InputControl from '../components/InputControl'
const initState = {
  firstName: '',
  lastName: '',
  email: '',
  bio: '',
  phone: '',
  photo: null,
}
const EditProfile = () => {
  const [value, setValue] = useState(initState)
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <div className='edit-profile'>
      <header> Edit Personal Details</header>
      <form className='edit-details'>
        <InputControl
          handleChange={handleChange}
          type='file'
          value={value.photo}
          name='photo'
        />
        {/* first name */}
        <InputControl
          labelText='first Name'
          phText='maya'
          handleChange={handleChange}
          type='text'
          value={value.firstName}
          name='firstName'
        />
        {/* last name */}
        <InputControl
          labelText='last Name'
          phText='tdragen'
          handleChange={handleChange}
          type='text'
          value={value.lastName}
          name='lastName'
        />
        {/*email name */}
        <InputControl
          labelText='email'
          phText='maya@gmail.com'
          handleChange={handleChange}
          type='email'
          value={value.email}
          name='email'
        />
        {/*bio name */}
        <InputControl
          labelText='bio'
          phText='Hi, there!'
          handleChange={handleChange}
          type='textarea'
          value={value.bio}
          name='bio'
        />
        <InputControl
          labelText='phone'
          phText='1234567890'
          handleChange={handleChange}
          type='number'
          value={value.phone}
          name='phone'
        />
        <button type='submit' className='save-btn'>
          Save details
        </button>
      </form>
    </div>
  )
}

export default EditProfile

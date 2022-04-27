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
const EditProfile = ({ profile, setProfile }) => {
  const [value, setValue] = useState(profile)
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    // <div className='edit-profile'>
    <>
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
          name='family_name'
        />
        {/* last name */}
        <InputControl
          labelText='last Name'
          phText='tdragen'
          handleChange={handleChange}
          type='text'
          value={value.lastName}
          name='given_name'
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

        <button type='submit' className='save-btn'>
          Save details
        </button>
      </form>
    </>
  )
}

export default EditProfile

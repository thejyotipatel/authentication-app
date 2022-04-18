import React from 'react'

const InputControl = ({
  labelText,
  phText,
  handleChange,
  type,
  value,
  name,
}) => {
  return (
    <div className='input-control'>
      <label htmlFor={name} className='ip-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        className='ip-control'
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={phText || name}
      />
    </div>
  )
}

export default InputControl

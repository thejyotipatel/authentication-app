import React from 'react'

const Values = ({ profile }) => {
  let data = profile
  // console.log(data)
  let keysData = Object.keys(profile)
  if (Object.keys(profile).length > 1) {
    return (
      <>
        <td>{keysData}</td>

        {keysData.map((item, index) => {
          return <Values key={index} profile={item} />
        })}
      </>
    )
  } else {
    return
    ;<td>{Object.keys(profile)}</td>
  }
}

export default Values

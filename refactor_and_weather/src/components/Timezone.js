import React from 'react'

export const Timezone = ({timezone}) => {
  console.log("timezone: ", {timezone});
  return(
    <>
      <h2>Timezone</h2>
      <p>TIMEZONE: {timezone}</p>
    </>
  )
}

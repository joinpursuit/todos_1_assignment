import React from 'react'

export const Currently = ({ currently }) => {
  console.log("Currently: ", currently)
  const {humidity, temperature, summary} = currently
  return(
    <>
      <h2>currently</h2>
      <p>SUMMARY: {summary}</p>
      <p>TEMPERATURE: {temperature}</p>
      <p>HUMIDITY: {humidity}</p>
    </>
  )
}

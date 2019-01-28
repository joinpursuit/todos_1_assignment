import React from 'react'

export const Currently = ({ currently }) => {
  console.log("Currently: ", currently)
  const {time, humidity, temperature, summary} = currently
  return(
    <>
      <h2>currently</h2>
      <p>TIME: {time}</p>
      <p>SUMMARY: {summary}</p>
      <p>TEMPERATURE: {temperature}</p>
      <p>HUMIDITY: {humidity}</p>
    </>
  )
}

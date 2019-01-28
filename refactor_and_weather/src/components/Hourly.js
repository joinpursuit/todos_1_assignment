import React from 'react'

export const Hourly = ({hourly}) => {
  console.log('hourly: ', {hourly});
  const {summary} = hourly
  return (
    <>
      <h2>hourly</h2>
      <p>SUMMARY: {summary}</p>

    </>
  )
}

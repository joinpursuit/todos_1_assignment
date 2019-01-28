import React from 'react'

export const Daily = ({daily}) => {
  console.log('daily: ', daily);

  const {summary, data} = daily
  // data = data.map ((datum, i) => {
  //   return <li key={i}> datum.time </li>
  // })
  return (
    <>
      <h2>Daily</h2>
      <p>SUMMARY: {summary}</p>

    </>
  )
}

// <ul>DATA: {data}</ul>

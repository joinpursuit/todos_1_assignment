import React from 'react'

const Day = ({ dayArray, tempArray, convertToC}) => {
  let parseDays = dayArray.map( day => {
    let dayStrings = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return dayStrings[day];
  })

  let renderDays = parseDays.map( day => {
    return (
      <span>{day}</span>
    )
  })
  let tempsToC = tempsConverter(tempArray)
  let renderTemps = tempArray.map((temp,i,a) => {
    return (
      <><span>{temp}°</span>{(i % 2 === 0) ? "-" : ""}</>
    )
  })
  let renderTempsToC = tempsToC.map((temp,i,a) => {
    return (
      <><span>{temp}°</span>{(i % 2 === 0) ? "-" : ""}</>
    )
  })

  return (
    <>
      <div id="day">
      {renderDays}
      </div>
      <div id="day">
      {convertToC ? renderTempsToC : renderTemps}
      </div>
    </>
  )
}

const tempsConverter = (tempsArr) => {
  return tempsArr.map(tempF => {
    return Math.round((tempF - 32) / 1.8)
  })
}

export default Day

import React from 'react'

const Day = (props) => {
  let parseDays = props.dayArray.map( day => {
    let dayStrings = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return dayStrings[day];
  })

  let renderDays = parseDays.map( day => {
    return (
      <span>{day}</span>
    )
  })
  let renderTemps = props.tempArray.map( temp => {
    return (
      <span>{temp}</span>
    )
  })


  return (
    <>
      <div id="day">
      {renderDays}
      </div>
      <div id="day">
      {renderTemps}
      </div>
    </>
  )
}

export default Day

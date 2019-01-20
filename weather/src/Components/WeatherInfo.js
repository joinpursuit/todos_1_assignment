import React from 'react'
import Day from './Day'

//Create 3 arrays with the info for each component
//pass each array as props
//map into weather info
const WeatherInfo = (props) => {
  let { dailyData, location } = props
  let dailyCopyDay = [...dailyData].map(day => {
    //parse Unix to Day
    return new Date(day.time*1000).getDay();
  })
  let dailyCopyIcon = [...dailyData].map(day => {
    return day.icon;
  })
  let dailyCopyTemp = [...dailyData].map(day => {
    return `${Math.round(day.temperatureMin)}-${Math.round(day.temperatureMax)}°F`
  })
  return (
    <>
      <p>tis the weatha this week.</p>
      <p>{location}</p>
      <Day
        dayArray={dailyCopyDay}
        tempArray={dailyCopyTemp}
        iconArray={dailyCopyTemp}
      />
    </>
  )
}

export default WeatherInfo

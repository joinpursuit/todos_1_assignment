import React from 'react'
import Day from './Day'

//Create 3 arrays with the info for each component
//pass each array as props
//map into weather info
const WeatherInfo = (props) => {
  let { dailyData } = props
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
  console.log(dailyData)
  return (
    <>
      <p>NYC: tis the weatha.</p>
      <p>{dailyData.location}</p>
      <Day
        dayArray={dailyCopyDay}
        tempArray={dailyCopyTemp}
        iconArray={dailyCopyTemp}
      />
    </>
  )
}

export default WeatherInfo

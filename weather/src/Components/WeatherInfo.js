import React from 'react'
import Day from './Day'

//Create 3 arrays with the info for each component
//pass each array as props
//map into weather info
const WeatherInfo = (props) => {
  let { dailyData, location, convertToC, error, loading} = props
  let dailyCopyDay = [...dailyData].map(day => {
    //parse Unix to Day
    return new Date(day.time*1000).getDay();
  })
  let dailyCopyIcon = [...dailyData].map(day => {
    return day.icon;
  })
  let dailyCopyTempF = [...dailyData].map(day => {
    return [Math.round(day.temperatureMin),Math.round(day.temperatureMax)]
  }).flat()

  return (
    <>
      <p>{error ? "No Information was found for this location, try again." : "tis the weatha upon us this week."}</p>
      {loading ? <img
                    id="loading"
                    alt="loading..."
                    src="https://www.freeiconspng.com/uploads/spinner-icon-0.gif"
                  />
                : <>
                    <h2>{location}</h2>
                    <Day
                      dayArray={dailyCopyDay}
                      tempArray={dailyCopyTempF}
                      iconArray={dailyCopyIcon}
                      convertToC={convertToC}
                    />
                  </>
                  }
    </>
  )
}

export default WeatherInfo

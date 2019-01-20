import React from 'react';
// import { Day } from './Day'

export const ListDay = props => {
  let dayList = props.dailyData;
  let aDay = dayList.map((day) => {
  return (
    <>

    <h3 >HIGH</h3>
    <p>{day.temperatureHigh} Farenheit</p>
    <h4>LOW</h4>
    <p>{day.temperatureLow} Farenheit</p>
    <h4>SUMMARY</h4>
    <p>{day.summary}</p>

    </>
  )
  })
  return (
    <>
    <div>
    {aDay}
    </div>

    </>
  )
}

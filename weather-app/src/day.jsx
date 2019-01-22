import React, { Component } from 'react';

const Day = ({ day, sunrise, sunset, dew, currentTemp, clouds, humidity, summary}) => {
    let date = new Date(day * 1000).toDateString();
    const unixToTime = (unix) => new Date(unix * 1000).toLocaleTimeString()

    return (
        
        <React.Fragment>
            <h3 className='day'>{ date }</h3>
            <p className='sunrise'>Sunrise: { unixToTime(sunrise) }</p>
            <p className='sunset'>Sunset: { unixToTime(sunset) }</p>
            <p className='dew'>Dew Point: { dew }</p>
            <p className='currentTemp'>Currently: { currentTemp }</p>
            <p className='cloudiness'>Cloudiness: { clouds }</p>
            <p className='humidity'>Humidity: { humidity }</p>
            <p className='summary'>{ summary }</p>
        </React.Fragment>
    )
}

export default Day;
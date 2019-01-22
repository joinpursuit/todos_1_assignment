import React from 'react';
import Day from './day';

const Feed = ({ dailyWeather }) => {

let daily = dailyWeather.map(day => {
    return (
        <Day
        summary={ day.summary }
        sunrise={ day.sunriseTime }
        sunset={ day.sunsetTime }
        dew={ day.dewPoint }
        day={ day.time }
        clouds={ day.cloudCover }
        humidity={ day.humidity }
        />
    )
})

    return (
        <div className='fiveDayFeed'>
          { daily }
        </div>
    )
}

export default Feed;
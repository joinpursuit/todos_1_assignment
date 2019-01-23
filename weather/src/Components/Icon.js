import React from 'react';

const Icon = ({ iconArray }) => {
  let iconLinks = {
    "clear-day": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-clear-512.png",
    "clear-night": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-clear-night-512.png",
    "rain": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-showers-scattered-512.png",
    "snow": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-snow-512.png",
    "sleet": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-snow-512.png",
    "wind": "https://cdn3.iconfinder.com/data/icons/weather-icons-8/512/weather-windy-512.png",
    "fog": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-overcast-512.png",
    "cloudy": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-overcast-512.png",
    "partly-cloudy-day": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-512.png",
    "partly-cloudy-night": "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-night-512.png"
  }

  let renderImgs = iconArray.map(icon => {
    return <span><img src={iconLinks[icon]} alt={icon} /></span>
  })
  return (
    <div className="icon">{renderImgs}</div>
  )
}

export default Icon;

import React from 'react'


const WeatherDisplay = (props) => {

return(
  <>
  {props.timeZone ?
    <div>
    <table className="tableData">
    <tr>
      <th>Region</th>
      <th>Weather Status</th>
      <th>Temperature</th>
    </tr>
    <tr>
    <td>{props.timeZone}</td>
    <td>{props.weatherUpdate}</td>
    <td>{props.temperature}</td>
    </tr>
    </table>

  </div>:null}


  </>
)

}



export default WeatherDisplay;
// <p>Region</p>
//
// <p className="timeZone">{props.timeZone}</p>
//
// <p>Weather Status</p>
// <p className="weatherUpdate">{props.weatherUpdate}</p>
//
// <p>Temperature</p>
// <p className="temperature">{props.temperature} F</p>


// {props.temperature > 65 ?
//  <img className="simpsons"src="https://media1.tenor.com/images/e5b6969646a123835a953458f40c0947/tenor.gif?itemid=11294547"/>: <img className="simpsons" src="https://frinkiac.com/video/S07E06/OWOF3Gkf5RPjjb5nN6TsnfCtqc4=.gif"/> }

import React, { Component } from 'react';

import './App.css';

const userkey = require('./secret.json');

class App extends Component {
  constructor() {
    super();
    this.state ={
      latitude: 0,
      longitude: 0,
      timezone: '',
      currently: {},
      daily: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = key => {
    const pass = userkey.key;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://api.darksky.net/forecast/${pass}/40.730610,-73.935242`
    fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(res => {
      this.setState({
        latitude: res.latitude,
        longitude: res.longitude,
        timezone: res.timezone,
        currently: res.currently,
        daily: res.daily.data
      })
    })
  }

  timeCovert = unixTime =>{
    let date = new Date(unixTime * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let time = month + day + ', ' + year;
    return time;
  }

  weekdayCovert = unixTime =>{
    let date = new Date(unixTime * 1000);
    let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    let dateOfWeek = weekday[date.getDay()];
    return dateOfWeek;
  }

  render() {
    console.log(this.state);
    const dailyArr = this.state.daily;
    debugger
    return (
      <div className="App">
        <h1> Weather Forecast App - New York City</h1>
        <button
          onClick={this.handleSubmit}
        >Click To Check Weather In Following Five Days
        </button> 

        {this.handleSubmit ? 
        <table>
          <tr>
            <th>time</th>
            <th>summary</th>
            <th>icon</th>
            <th>tempHigh</th>
            <th>tempLow</th>
            <th>humidity</th>
            <th>windSpeed</th>
          </tr>
          <tr>
            <td>dailyArr[0].time</td>
            <td>dailyArr[0].summary</td>
            <td>dailyArr[0].icon</td>
            <td>dailyArr[0].tempHigh</td>
            <td>dailyArr[0].tempLow</td>
            <td>dailyArr[0].humidity</td>
            <td>dailyArr[0].windSpeed</td>
          </tr>
          <tr>
            <td>dailyArr[1].time</td>
            <td>dailyArr[1].summary</td>
            <td>dailyArr[1].icon</td>
            <td>dailyArr[1].tempHigh</td>
            <td>dailyArr[1].tempLow</td>
            <td>dailyArr[1].humidity</td>
            <td>dailyArr[1].windSpeed</td>
          </tr>
          <tr>
            <td>dailyArr[2].time</td>
            <td>dailyArr[2].summary</td>
            <td>dailyArr[2].icon</td>
            <td>dailyArr[2].tempHigh</td>
            <td>dailyArr[2].tempLow</td>
            <td>dailyArr[2].humidity</td>
            <td>dailyArr[2].windSpeed</td>
          </tr>
          <tr>
            <td>dailyArr[3].time</td>
            <td>dailyArr[3].summary</td>
            <td>dailyArr[3].icon</td>
            <td>dailyArr[3].tempHigh</td>
            <td>dailyArr[3].tempLow</td>
            <td>dailyArr[3].humidity</td>
            <td>dailyArr[3].windSpeed</td>
          </tr>
          <tr>
            <td>dailyArr[4].time</td>
            <td>dailyArr[4].summary</td>
            <td>dailyArr[4].icon</td>
            <td>dailyArr[4].tempHigh</td>
            <td>dailyArr[4].tempLow</td>
            <td>dailyArr[4].humidity</td>
            <td>dailyArr[4].windSpeed</td>
          </tr>
          <tr>
            <td>dailyArr[5].time</td>
            <td>dailyArr[5].summary</td>
            <td>dailyArr[5].icon</td>
            <td>dailyArr[5].tempHigh</td>
            <td>dailyArr[5].tempLow</td>
            <td>dailyArr[5].humidity</td>
            <td>dailyArr[5].windSpeed</td>
          </tr>
          <tr>
            <td>dailyArr[6].time</td>
            <td>dailyArr[6].summary</td>
            <td>dailyArr[6].icon</td>
            <td>dailyArr[6].tempHigh</td>
            <td>dailyArr[6].tempLow</td>
            <td>dailyArr[6].humidity</td>
            <td>dailyArr[6].windSpeed</td>
          </tr>
        </table>
        : null}
      </div>
    );
  }
}

export default App;

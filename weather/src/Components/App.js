import React, { Component } from 'react';
import axios from 'axios';
import secretKey from '../key.json'
import Form from './Form'
import WeatherInfo from "./WeatherInfo"
import '../App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dailyData: "",
      longitude: "",
      latitude: "",
      inputLocation: "",
      location: ""
    }
  }
  //API Handle order:
  //user submits
  //getGeoLocation request
  //getWeatherData request
  //getGeoLocationReversed request
  getGeoLocation = () => {
    //code
  }
  getWeatherData = () => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${secretKey}/42.3601,-71.0589?exclude=currently,minutely,hourly`)
    .then(res => {
      //store the first 5 days
      let longitude = res.data.longitude
      let latitude = res.data.latitude
      let dailyData = res.data.daily.data.slice(0,5)
      this.setState({
        dailyData: dailyData,
        longitude: longitude,
        latitude: latitude
      })
    })
  }
  getGeoLocationReversed = () => {
    //code
  }

  componentDidMount = () => {
    this.getWeatherData()
  }
  //User input handle
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      inputLocation: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let { dailyData, inputLocation } = this.state

    return (
      <div className="App">
        <Form
          inputLocation={inputLocation}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <WeatherInfo dailyData={dailyData}/>
      </div>
    );
  }
}

export default App;


//make form functional Component
//make weather info functional component
//make ajax request for ny and display it on screen

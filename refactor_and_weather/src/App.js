import React, { Component } from 'react';
// import { Weather } from './components/Weather.js'
import { Currently } from './components/Currently.js'
import { Hourly } from './components/Hourly.js'
import { Daily } from './components/Daily.js'
import { Timezone } from './components/Timezone.js'

import './App.css';
import axios from 'axios'
import weather_key from './secret.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        latitude: null,
        longitude: null,
      },
      weather: {
        currently: {},
        daily: {},
        hourly: {},
        timezone: '',
      },
      error: '',
    }
    // this.getLocation = this.getLocation.bind(this)
  }

  // getLocation = () => {
  //   navigator.geolocation.getCurrentPosition (
  //     (position) => {
  //       // debugger
  //       // console.log(position);
  //       this.setState({
  //         location: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude
  //         }
  //       })
  //       setTimeout( () => {
  //         this.getWeather()
  //       }, 1000)
  //     },
  //     (error) =>
  //       this.setState({
  //         error: error.message
  //       })
  //   )
  // }

  getWeather(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weather_key}/40.7128,-74.0060`)
    .then (res => {
      this.setState( () => ({
        weather: res.data,
      }))
      // debugger
    })
    .catch( error => {
      this.setState({
        error: 'Darksky API is giving troub.'
      })
    })
  }

  componentDidMount() {
    this.getWeather()
  }

  renderCurrently(){
    const {weather: {currently}} = this.state
    this.setState({currently: currently})
  }

  renderDaily(){
    const {weather: {daily}} = this.state
    this.setState({daily: daily})
  }

  renderHourly(){
    const {weather: {hourly}} = this.state
    this.setState({hourly: hourly})
  }

  renderTimezone(){
    const {weather: {timezone}} = this.state
    this.setState({timezone: timezone})
  }

  render() {
    const {weather} = this.state;
    const {currently, daily, hourly, timezone} = weather;
    return (
      <div className="App">
        <Timezone timezone={timezone} />
        <Currently currently={currently} />
        <Hourly hourly={hourly} />
        <Daily daily={daily} />
      </div>
    );
  }
}

// <Weather weather={this.state.weather}/>

export default App;

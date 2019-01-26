import React, { Component } from 'react';

import './App.css';
import axios from 'axios'
import weather_key from './secret.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: {},
      weather: {},
    }
    this.getLocation = this.getLocation.bind(this)
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition = (position) => {
      debugger
      console.log(position);
      this.setState({
        location: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
      })
      setTimeout( () => {
        this.getWether()
      }, 1000)
    }
  }

  getWeather = () => {
    axios.get(`https://api.darksky.net/forecast/${weather_key}/${this.state.location.lat},${this.state.location.long}`)
    .then (res => {
      this.setState({
        weather: res,
      })
      debugger
    })
  }

  componentDidMount() {
    this.setState({
      location: 'hello'
    })
    this.getLocation()
    // this.getWeather()
  }

  render() {
    console.log(weather_key);
    return (
      <div className="App">
        Hello

      </div>
    );
  }
}

export default App;

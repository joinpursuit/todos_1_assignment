import React, { Component } from "react";
import Location from './location.js'
import WeatherDisplay from './displayWeather.js'
import Navbar from './navbar.js'
import Footer from './footer.js'
import WeatherPicture from './weatherPicture.js';
import "./App.css";
const secret = require("./secret.json");
const axios = require("axios");
// const cors = require('cors');

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherUpdate: "",
      longitude: "",
      latitude: "",
      timeZone: "",
      temperature: null
    };
    this.handleChange = this.handleChange.bind(this)
    this.apiCall = this.apiCall.bind(this)
  }

  handleChange(event){
    this.setState({
    [event.target.name]: event.target.value
    })
  }
// -71.0589
// 42.3601

  apiCall() {
    const key = secret.weatherKey[0].SecretKey;
    // let data;
    axios
      .get(
        ` https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${this.state.longitude},${this.state.latitude}`
      )
      .then(response => {

        let data = response.data.daily.summary
        this.setState({
          weatherUpdate: data,
          timeZone: response.data.timezone,
          temperature: response.data.currently.temperature,
          longitude: "",
          latitude: ""


        });
      });
  }

  render() {
    // console.log(secret.weatherKey[0].SecretKey, "this");
    // console.log(this.state.weatherUpdate,"this")
    console.log(this.state)
    return (
      <div className="App">
        <Navbar />


        <br />
        <Location apiCall={this.apiCall}
          handleChange={this.handleChange}
          longitude={this.state.longitude}
          latitude={this.state.latitude}/>

        <button className="weatherButton" name="weatherUpdate" value={this.state.weatherUpdate} onClick={this.apiCall}>click for weather update</button>

        <WeatherDisplay
          weatherUpdate={this.state.weatherUpdate}
           timeZone={this.state.timeZone}
           temperature={this.state.temperature}
           />

         {this.state.temperature ?
         <WeatherPicture
           temperature={this.state.temperature}/>
         : null }

         <Footer />
      </div>
    );
  }
}

export default App;

// onClick={(event) => { func1(); func2();}}
// response.header("Access-Control-Allow-Origin", "*");

  //
  // <button name="weatherUpdate" value={this.state.weatherUpdate} onClick={this.apiCall}>click</button>

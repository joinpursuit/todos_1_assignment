import React, { Component } from 'react';
import axios from 'axios';
import secretKey from '../key.json'
import secretKey2 from '../key2.json'
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
      location: "",
      convertToC: true
    }
  }
  //API Handlers
  getGeoLocation = () => {
    let searchString = this.state.inputLocation.split(" ").join("+")
    //handle API errors
    return axios
            .get(`https://cors-anywhere.herokuapp.com/https://www.mapquestapi.com/geocoding/v1/address?key=${secretKey2}&inFormat=kvp&outFormat=json&location=${searchString}&thumbMaps=false`)
            .then(res => {
              let locationData = res.data.results[0].locations[0];
              let town = locationData.adminArea5;
              let state = locationData.adminArea3;
              let country = locationData.adminArea1;
              let locationString = [town,state,country].join(", ");
              let long = locationData.latLng.lng;
              let lat = locationData.latLng.lat;
              this.setState({
                longitude: long,
                latitude: lat,
                location: locationString
              })
            })
  }
  getWeatherData = () => {
    return axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${secretKey}/${this.state.latitude},${this.state.longitude}?exclude=currently,minutely,hourly`)
            .then(res => {
              //store the first 5 days
              let dailyData = res.data.daily.data.slice(0,5)
              this.setState({
                dailyData: dailyData
              })
            })
  }
  async handleApiFlow() {
    const geoRes = await this.getGeoLocation()
    const weatherRes = await this.getWeatherData()
  }

  //User Input Handlers
  handleSubmit = (event) => {
    event.preventDefault();
    this.handleApiFlow();
    this.setState({
      inputLocation: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    let newBoolean = this.state.convertToC ? false : true
    this.setState({
      convertToC: newBoolean
    })
  }

  render() {
    let { dailyData, inputLocation, location, convertToC } = this.state
    return (
      <div className="App">
        <img alt="earth" src="https://space-facts.com/wp-content/uploads/earth-transparent.png" />
        <Form
          inputLocation={inputLocation}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
          convertToC={convertToC}
        />
        <WeatherInfo
          dailyData={dailyData}
          location={location}
          convertToC={convertToC}
        />
      </div>
    );
  }
}

export default App;

//make a button that switches between how it looks
// everytime you click

//make form functional Component
//make weather info functional component
//make ajax request for ny and display it on screen

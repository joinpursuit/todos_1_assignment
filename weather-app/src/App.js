import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Feed from './feed';
const key = require('./key.json');

class App extends Component {
  constructor () {
    super ()
    this.state = {
      apiKey: key,
      isLoaded: false,
      weather: null
    }
  }
  
  componentDidMount() {
    axios
    .get(this.state.apiKey.api)
    .then(result => {
          let weather = result.data
          this.setState({
            isLoaded: true,
            weather: weather
          });
          console.log(this.state.weather)
        }
      )
    .catch()
  }

  render() {
    const { error, isLoaded, weather } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <Feed 
         dailyWeather={ weather.daily.data }
        />
        
        </div>
      );
    }
  }
}



export default App;

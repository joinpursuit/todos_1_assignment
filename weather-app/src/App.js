import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { key } from "./secret.json";
import weatherImages from "./weather-images.js";
import cities from "./uscities.json";
import Info from "./Info.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      res: [],
      eightDay: [],
      cities: cities,
      twelveHourly: [],
      currently: "",
      cityName: "",
      stateName: "",
      latitude: "",
      longitude: "",
      summary: "",
      alerts: ""
    };
  }

  listUsCities = () => {
    let { cities } = this.state;
    let cityList = cities.map(city => {
      return <option key={city.rank}>{city.city}</option>;
    });
    return cityList;
  };

  getData = (latitude, longitude, city, state) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}//${latitude},${longitude}`
      )
      .then(res => {
        this.setState({
          res: res,
          eightDay: res.data.daily.data,
          cityName: city,
          stateName: state,
          twelveHourly: res.data.hourly.data,
          currently: res.data.currently,
          summary: res.data.daily.summary,
          alerts: res.data.alerts
        });
      })
      .catch(err => err);
  };

  changeHandler = e => {
    let { cities } = this.state;
    cities.forEach(city => {
      if (e.target.value === city.city) {
        this.getData(city.latitude, city.longitude, city.city, city.state);
      }
    });
  };

  getWeatherIcon = (icon, summary) => {
    let otherCons = [
      "Mostly Cloudy",
      "Possible Light Snow",
      "Light Snow",
      "Light Rain",
      "Light Rain and Breezy",
      "Rain and Breezy"
    ];
    if (otherCons.includes(summary)) {
      return summary;
    } else {
      return icon;
    }
  };

  getHour = date => {
    let hours = new Date(date * 1000).getHours();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let strTime = hours + ampm;
    return strTime.toString();
  };

  getMinutes = date => {
    let hours = new Date(date * 1000).getHours();
    let minutes = new Date(date * 1000).getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  displayHourly = () => {
    let { twelveHourly } = this.state;
    let cutDownToTwelve = twelveHourly.slice(0, 12);
    let hourlyDivs = cutDownToTwelve.map(hourlyTemp => {
      let icon = this.getWeatherIcon(hourlyTemp.icon, hourlyTemp.summary);
      return (
        <div className="eachHour" key={hourlyTemp.time}>
          <p className="hourlyPTags">{this.getHour(hourlyTemp.time)}</p>
          <p className="hourlyPTags">{Math.floor(hourlyTemp.temperature)}º</p>
          <img alt="scattered_showers_day_night" src={weatherImages[icon]} />
          <p className="hourlyPTags">{hourlyTemp.summary}</p>
        </div>
      );
    });
    return hourlyDivs;
  };

  displayEightDay = () => {
    let { eightDay } = this.state;
    let dailyTemps = eightDay.map(daily => {
      let pubDate = new Date(daily.time * 1000).toDateString().slice(0, 3);
      return (
        <div className="eachDay" key={daily.time}>
          <p>{pubDate.toString()} </p>
          <p>High: {Math.floor(daily.temperatureHigh)}º</p>
          <img alt={daily.icon} src={weatherImages[daily.icon]} />
          <p>
            {Math.floor(daily.precipProbability * 100)}% chance of{" "}
            {daily.precipType}
          </p>
          <p>Low: {Math.floor(daily.temperatureLow)}º</p>
          <p>{daily.summary}</p>
        </div>
      );
    });
    return dailyTemps;
  };

  render() {
    let { res, eightDay, cityName, currently, summary, alerts } = this.state;
    console.log(currently);
    console.log(eightDay);
    console.log(res);
    return (
      <>
        <div className="App">
          {eightDay.length === 0
            ? this.getData(40.7127837, -74.0059413, "New York", "New York")
            : null}
          <select onChange={this.changeHandler}>{this.listUsCities()}</select>
          <h1>
            {this.state.cityName}, {this.state.stateName}
          </h1>
          <div className="forcastHeader">
            <h3>Next 12 Hours in {cityName}</h3>
            <p>{currently.summary}</p>
          </div>
          <div className="hourlyTemps">{this.displayHourly()}</div>
          <div className="forcastHeader">
            <h3>8-Day Forcast for {cityName}</h3>
            <p>{summary}</p>
          </div>
          <div className="eightDay">
            {this.state.eightDay ? this.displayEightDay() : null}
          </div>
          {eightDay.length === 8 ? (
            <Info
              getMinutes={this.getMinutes}
              currently={currently}
              eightDay={eightDay}
              res={res}
              alerts={alerts}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;

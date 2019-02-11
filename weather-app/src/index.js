import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// [
//  {
//    "type": "thunderstorm",
//    "conditions": [
//      {
//        "thunderstorm": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/0d.png"
//      }
//    ]
//  },
//  {
//    "type": "hail",
//    "conditions": [
//      {
//        "hail": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/18n.png"
//      }
//    ]
//  },
//  {
//    "type": "rain",
//    "conditions": [
//      {
//        "clear-day": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/31d.png"
//      },
//      {
//        "rain": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/10d.png"
//      },
//      {
//        "clear-night": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/31n.png"
//      },
//      {
//        "snow": "https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/snow_rain_mix_day_night@2x.png"
//      },
//      {
//        "sleet": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/15d.png"
//      },
//      {
//        "wind": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/23d.png"
//      },
//      {
//        "partly-cloudy-day": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/34d.png"
//      },
//      {
//        "partly-cloudy-night": "http://www.hodhotel.co.il/wp-content/plugins/wp-simpleweather/images/yahoo-weather/34n.png"
//      },
//
//      "fog",
//      "cloudy",
//
//      "partly-cloudy-night"
//    ]
//  },
//  {
//    "type": "snow",
//    "conditions": [
//      "clear-day",
//      "clear-night",
//      "rain",
//      "snow",
//      "sleet",
//      "wind",
//      "fog",
//      "cloudy",
//      "partly-cloudy-day",
//      "partly-cloudy-night"
//    ]
//  },
//  {
//    "type": "sleet",
//    "conditions": [
//      "clear-day",
//      "clear-night",
//      "rain",
//      "snow",
//      "sleet",
//      "wind",
//      "fog",
//      "cloudy",
//      "partly-cloudy-day",
//      "partly-cloudy-night"
//    ]
//  }
// ]

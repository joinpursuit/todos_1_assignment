import React from "react";

const Info = ({ res, eightDay, currently, getMinutes, alerts }) => {
  const displayAlerts = () => {
    if (alerts) {
      let alertMessages = alerts.map(alert => {
        return <div className="alerts">{alert.description}</div>;
      });
      return alertMessages;
    }
  };
  return (
    <>
      <div className="forcastHeader">
        <h3>Aditional Local Weather Information</h3>
        <p>(Weather Alerts at the Bottom)</p>
      </div>
      <div className="info">
        <div className="infoLine">
          <p>Sunrise: {getMinutes(eightDay[0].sunriseTime)}</p>
          <p>Visibility: {currently.visibility} miles</p>
          <p>UV Index: {currently.uvIndex}</p>
          <p>Wind Speed: {Math.ceil(currently.windSpeed)} mph</p>
          <p>Pressure: {(currently.pressure * 0.02953).toFixed(2)} inHg</p>
        </div>
        <div className="infoLine">
          <p>Sunset: {getMinutes(eightDay[0].sunsetTime)}</p>
          <p>Humidity: {Math.floor(currently.humidity * 100)} %</p>
          <p>
            Chance of {eightDay[0].icon}: {currently.precipProbability * 100} %
          </p>
          <p>Feels Like: {currently.apparentTemperature} º</p>
          <p>Cloud Cover: {Math.floor(currently.cloudCover * 100)} %</p>
        </div>
      </div>
      {alerts ? (
        <div className="alertDiv">
          <h2 className="alertTitle">Alerts</h2>
          <div className="alertBody">{displayAlerts()}</div>
        </div>
      ) : null}
    </>
  );
};

export default Info;

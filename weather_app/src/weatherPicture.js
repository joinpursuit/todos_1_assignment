import React from "react";

const WeatherPicture = props => {
  if (props.temperature && props.temperature > 65) {
    return (
      <>
        <img
          className="simpsons"
          src="https://media1.tenor.com/images/e5b6969646a123835a953458f40c0947/tenor.gif?itemid=11294547" alt=""
        />
      </>
    )
  }else if(props.temperature && props.temperature < 65 && props.temperature > 1){
    return(
      <>
      <img className="simpsons" src="https://frinkiac.com/video/S07E06/OWOF3Gkf5RPjjb5nN6TsnfCtqc4=.gif" alt=""/>
      </>
    )
  }
};

export default WeatherPicture;

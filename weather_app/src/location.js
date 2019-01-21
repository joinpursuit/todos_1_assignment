import React from 'react';


const Location = ({apiCall, handleChange, longitude, latitude}) => {
console.log(handleChange)
return(

  <>

    <form >
    <div className="formInput1">
      <label htmlFor="longitude">Please enter a longitude</label>
        <input onChange={handleChange} name="longitude" value={longitude} type="text" />
    </div>

    <div className="formInput2">
      <label htmlFor = "latitude">Please enter a Latitude</label>
        <input onChange={handleChange} name="latitude" value={latitude} type="text" />
    </div>
        </form>

  </>
)
}




export default Location;

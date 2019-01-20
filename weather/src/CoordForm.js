import React from 'react';

export const CoordForm = props => {

  return (

    <div>

    <form onSubmit={props.handleSubmit}>
    <label htmlFor="latitude">Latitude</label>
    <input onChange={props.handleChange} type="text" name="latitude" value={props.latitude} placeholder="Enter latitude"/>
    <label htmlFor="longitude">Longitude</label>
    <input onChange={props.handleChange} type="text" name="longitude" value={props.longitude} placeholder="Enter longitude" />

    <button> SuBmIt </button>
    </form>

    </div>

  )
}

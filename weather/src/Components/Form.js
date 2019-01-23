import React from 'react'

const Form = (props) => {
  let {inputLocation, handleChange, handleSubmit, convertToC, handleClick } = props;
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="inputLocation"
            onChange={handleChange}
            value={inputLocation}
            placeholder="Enter location"
          />
          <button type="submit">Go</button>
          <div className="toggle" onClick={handleClick}>{convertToC ? "°C":"°F"}</div>
        </form>
    )
}

export default Form;

import React from 'react'

const Form = (props) => {
  let {inputLocation, handleChange, handleSubmit } = props;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="inputLocation"
            onChange={handleChange}
            value={inputLocation}
            placeholder="Enter location"
          />
          <button type="submit">Go</button>
        </form>
      </>
    )


}

export default Form

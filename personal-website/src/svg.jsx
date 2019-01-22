import React from 'react';
import svgs from './svgs'

const SVG = ({ type }) => {

let skills = svgs.map(svg => {
    return (
        <div className='svg'>
        { svg.img }
        <p>{ svg.type }</p>
        </div>
    )
})

    return (
        <div className='svg'>
        { skills }  
        </div>
    )
}

export default SVG;
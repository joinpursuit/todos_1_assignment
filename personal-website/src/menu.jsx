import React, { Component } from 'react';
import Hobbies from './hobbies';
import SVG from './svg';

const Menu = () => {

    return (
        <div>
        <Hobbies />
        <SVG dimensions={100} type={'js'}/>
        </div>
    )
}

export default Menu;
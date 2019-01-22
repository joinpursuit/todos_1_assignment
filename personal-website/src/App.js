import React, { Component } from 'react';
import './App.css';
import SVG from './svg';
import Menu from './menu';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      displaySection: false
    }
  }

  render() {
    return (
      <div>
        <h1>Alex Park</h1>
        <Menu />
     </div>
    )
  }
}

export default App;

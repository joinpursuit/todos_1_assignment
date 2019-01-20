import React, { Component } from 'react';
import {ListDay} from './ListDay'
import { CoordForm } from './CoordForm'
import './App.css';
const axios = require("axios")
let secret = require('./secret.json')


class App extends Component {
  constructor(){
    super()
    this.state = {
      secret:secret,
      dailyData:[],
      latitude:0,
      longitude:0,
      date:{},
      message:""

    }
  }
  componentDidMount = () => {
    this.ShowCurrentDate();
  }

  testCall = () => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${secret.id}/${this.state.latitude},${this.state.longitude}`)
    .then(res => {
      this.setState({
        dailyData:res.data.daily.data
      })
    })
    .catch(err => {
      console.log("error")
    })
  }

  handleChange=(event)=>{

    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    if(this.state.latitude && this.state.longitude){

        this.testCall()

    }else{
      this.setState({
        message:"INput the required info, brrroooo"
      })
    }


  }

  ShowCurrentDate =(i) =>{
    let date = new Date().getDate()+ i;
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    this.setState({
      date:{
        day:date,
        month:month,
        year:year
      },
      message:""
    })

}



  render() {
    console.log(this.state
    )
    return (
      <>
      <CoordForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        latitude={this.state.latitude}
        longitude={this.state.longitude}
      />
        {this.state.message}


      <ListDay
        dailyData={this.state.dailyData}

        />
      <p>Brooo</p>

      </>

    );
  }
}

export default App;

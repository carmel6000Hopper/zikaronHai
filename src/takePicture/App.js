import React, { Component } from 'react';
import './App.css';
import {Camera} from './Camera';
// import {LocationGPS} from './LocationGPS';


class App extends Component {  
  render() {
      return (
        <div>
          <h1>take a photo:</h1>
          <Camera/>
          {/* <LocationGPS/> */}
        </div>
      );
    }
  }

export default App;

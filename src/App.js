import React, { Component } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import {Camera} from './takePicture/Camera.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      finishTakingPictures: false,
      locationUserConfirmation: false,
      imageUrlArray: []
    });
    this.finishTakingPicturesFunc = this.finishTakingPicturesFunc.bind(this);
  }
  finishTakingPicturesFunc(canvasURL){
    console.log(canvasURL);
    this.setState({ finishTakingPictures: true}, () => {
      console.log("this.state.finishTakingPictures", this.state.finishTakingPictures)
    })
  }

  render() {
    return (
      <div className="App">
        <Camera finishTakingPicturesFunc = {this.finishTakingPicturesFunc}/>
        <ImageUpload />
      </div>
    );
  }
}

export default App;

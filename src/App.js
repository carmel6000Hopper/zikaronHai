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
    this.saveCanvasURL = this.saveCanvasURL.bind(this);
  }
  finishTakingPicturesFunc(){
    this.setState({ finishTakingPictures: true}, () => {
      console.log("this.state.finishTakingPictures", this.state.finishTakingPictures)
    })
  }
  saveCanvasURL(canvasURL){
    console.log(canvasURL);
    // check if slice is necessary
    var newArray = this.state.imageUrlArray.slice();    
    newArray.push(canvasURL);   
    this.setState({ imageUrlArray: newArray}, () => {
      
    })
  }
  render() {
    return (
      <div className="App">
        <Camera finishTakingPicturesFunc = {this.finishTakingPicturesFunc} saveCanvasURL = {()=>this.saveCanvasURL}/>
        <ImageUpload />
      </div>
    );
  }
}

export default App;

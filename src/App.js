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
  
  finishTakingPicturesFunc(dataUrl){
    this.setState({ finishTakingPictures: true}, () => {
      console.log("this.state.finishTakingPictures", this.state.finishTakingPictures)
      console.log("dataUrl: ", dataUrl);
      var newArray = this.state.imageUrlArray.slice();    
      newArray.push(dataUrl);   
      this.setState({ imageUrlArray: newArray}, () => {
        console.log("this.state.imageUrlArray: ", this.state.imageUrlArray); 
      })
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

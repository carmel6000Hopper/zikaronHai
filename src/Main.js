import React, { Component } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import { Camera } from './components/Camera.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { PicPage } from './Router';
import { DisplayMapOnScreen } from './components/Location.js';
import { Menu } from './components/Menu';
import carmelLogo from './images/carmel6000logo.jfif'
import { GPS } from './components/GPS';

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      finishTakingPictures: false,
      locationUserConfirmation: false,
      longitude: 0,
      latitude: 0,
      imageUrlArray: []
    });
    this.finishTakingPicturesFunc = this.finishTakingPicturesFunc.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(latitude, longitude) {
    this.setState({ latitude: latitude, longitude: longitude })
  }
  finishTakingPicturesFunc(URLArray) {
    this.setState({ finishTakingPictures: true }, () => {
      console.log("this.state.finishTakingPictures", this.state.finishTakingPictures)
      console.log("dataUrl: ", URLArray);
      this.setState({ imageUrlArray: URLArray }, () => {
        console.log("this.state.imageUrlArray: ", this.state.imageUrlArray);
      })
    })
  }

  render() {
    return (
      <div className="App">
        {/* <Camera finishTakingPicturesFunc = {this.finishTakingPicturesFunc}/> */}
        {/* <ImageUpload imageUrlArr={this.state.imageUrlArray} /> */}
        {/* <Menu /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Menu} />

            <Route exact path="/camera"
              render={(props) =>
                <Camera {...props}
                  finishTakingPicturesFunc={this.finishTakingPicturesFunc} />} />

            <Route exact path="/upload"
              render={(props) =>
                <ImageUpload {...props}
                  imageUrlArr={this.state.imageUrlArray} longitude = {this.state.longitude} latitude = {this.state.latitude} />} />

            <Route exact path="/gps"   render={(props) =>  <DisplayMapOnScreen {...props}
                longitude = {this.state.longitude} latitude = {this.state.latitude} />} />


          </Switch>
        </BrowserRouter>
        <GPS updateLocation={this.updateLocation} /> 
        <br/> <br/>    
        <img src={carmelLogo} height="60" alt="carmel 6000 logo" />
  
      </div>
    );
  }
}


export default Main;
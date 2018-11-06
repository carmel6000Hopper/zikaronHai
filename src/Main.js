import React, { Component } from 'react';
import './App.css';
// import { CanvasArr } from './components/CanvasArr';
// import ImageUpload from './components/ImageUpload';
import { UploadHandler } from './components/UploadHandler'
import { Camera } from './components/Camera.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { DisplayMapOnScreen } from './components/Location.js';
import { Menu } from './components/Menu.js';
import carmelLogo from './images/carmel6000logo.jfif'
import { GPS } from './components/GPS.js';
import { WelcomePage } from './components/WelcomePage.js';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import LocationGPS from "./components/LocationGPS";

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      finishTakingPictures: false,
      locationUserConfirmation: false,
      longitude: 0,
      latitude: 0,
      imageUrlArray: [],
      marginRight: "0px"
    });
    
    this.updateLocation = this.updateLocation.bind(this);
    this.gps = new GPS(this.updateLocation);
    this.finishTakingPicturesFunc = this.finishTakingPicturesFunc.bind(this);
    console.log("Main componenet constructor updatelocation ", this.updateLocation)
  }

  updateLocation(latitude, longitude) {
    console.log("update location " + latitude + " " + longitude)
    this.setState({ latitude, longitude })
  }

  finishTakingPicturesFunc(imageUrlArray) {
    this.setState({ finishTakingPictures: true }, () => {
      console.log("this.state.finishTakingPictures", this.state.finishTakingPictures)
      console.log("dataUrl: ", imageUrlArray);
      this.setState({ imageUrlArray }, () => {
        console.log("this.state.imageUrlArray: ", this.state.imageUrlArray);
      })
    })
  }
  componentDidMount() {
    // gps start
    this.gps.startWatchingPosition();
  }
  render() {
    return (
      <div className="App">

        {/* <WelcomePage /> */}
        <BrowserRouter>
          <Switch>

            <Route exact path="/" render={(props) =>
              (<div>
                <Menu {...props} />
                <WelcomePage />
              </div>)} />

            <Route exact path="/camera"
              render={(props) =>
                (<div>
                  <Menu {...props} />
                  <Camera {...props}
                    finishTakingPicturesFunc={this.finishTakingPicturesFunc}
                    marginRight={this.state.marginRight} />
                </div>)} />

            <Route exact path="/upload"
              render={(props) =>
                (<div>
                  <Menu {...props} />
                  <UploadHandler {...props}
                    imageUrlArray={this.state.imageUrlArray}
                    longitude={this.state.longitude}
                    latitude={this.state.latitude} />
                </div>)} />

            <Route exact path="/gps1" render={(props) =>
              (<div>
                <Menu {...props} />
                <DisplayMapOnScreen {...props}
                  longitude={this.state.longitude}
                  latitude={this.state.latitude} />
              </div>)} />

              
            <Route exact path="/gps" render={(props) =>
              (<div>
                <Menu {...props} />
                <LocationGPS {...props}
                  longitude={this.state.longitude}
                  latitude={this.state.latitude} />
              </div>)} />

            {/* ------------------------------------------------------------- */}
            {/* <Route exact path="/sign"
              render={(props) =>
                (<div>
                  <Menu {...props} />
                  <WelcomePage />
                </div>)} /> */}
            {/* ------------------------------------------------------------- */}
            
            <Route exact path="/signup" render={(props) =>
              (<div>
                <Menu {...props} />
                <SignUp />
              </div>)} />

            <Route exact path="/login" render={(props) =>
              (<div>
                <Menu {...props} />
                <LogIn />
              </div>)} />


            {/* <Route exact path="/signin" component={SignIn}/> */}
          </Switch>
        </BrowserRouter>

        <br /> <br />
        <img id="carmelLogo" src={carmelLogo} height="60" alt="carmel 6000 logo" />
      </div>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import './App.css';
import {CanvasArr} from './components/CanvasArr';
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

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      finishTakingPictures: false,
      locationUserConfirmation: false,
      longitude: 0,
      latitude: 0,
      imageUrlArray: [],
      navBarIsOpened: false,
      marginRight : "0px"
    });
    this.updateLocation = this.updateLocation.bind(this);
    this.gps = new GPS(this.updateLocation);
    this.finishTakingPicturesFunc = this.finishTakingPicturesFunc.bind(this);
    this.setNavBarIsOpened = this.setNavBarIsOpened.bind(this);
    this.setNavBarIsClosed = this.setNavBarIsClosed.bind(this);
    console.log ("Main componenet constructor updatelocation ", this.updateLocation)
  }
  setNavBarIsOpened() {
    console.log("setNavBarIsOpened");
    this.setState({ navBarIsOpened: true,  marginRight : "250px" });
    document.getElementById("carmelLogo").style.marginRight = this.state.marginRight;
  }
  setNavBarIsClosed() {
    console.log("setNavBarIsClosed");
    this.setState({ navBarIsOpened: false, marginRight : "0px" });
    document.getElementById("carmelLogo").style.marginRight = this.state.marginRight;
  }
  updateLocation(latitude, longitude) {
    console.log("update location "+latitude+ " " + longitude)
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
  componentDidMount(){
    // gps start
    this.gps.startWatchingPosition();
  }
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) =>
              (<div>
                <Menu {...props}
                  setNavBarIsOpened={this.setNavBarIsOpened}
                  setNavBarIsClosed={this.setNavBarIsClosed} />

              </div>)} />

            {/* ------------------------------------------------------------- */}
            <Route exact path="/sign"
              render={(props) =>
                (<div>
                  <Menu {...props}
                    setNavBarIsOpened={this.setNavBarIsOpened}
                    setNavBarIsClosed={this.setNavBarIsClosed} />
                  <WelcomePage />
                </div>)} />
            {/* --------------------------------------------------------------------- */}

            <Route exact path="/camera"
              render={(props) =>
                (<div>
                  <Menu {...props}
                    setNavBarIsOpened={this.setNavBarIsOpened}
                    setNavBarIsClosed={this.setNavBarIsClosed} />
                  <Camera {...props}
                    finishTakingPicturesFunc={this.finishTakingPicturesFunc} 
                    marginRight = {this.state.marginRight}
                    navBarIsOpened={this.state.navBarIsOpened} />
                </div>)} />

            <Route exact path="/upload"
              render={(props) =>
                (<div>
                  <Menu {...props}
                    setNavBarIsOpened={this.setNavBarIsOpened}
                    setNavBarIsClosed={this.setNavBarIsClosed} />
                  <UploadHandler {...props}
                    imageUrlArray={this.state.imageUrlArray}
                    longitude={this.state.longitude}
                    latitude={this.state.latitude} />
                </div>)} />

            <Route exact path="/gps" render={(props) =>
              (<div>
                <Menu {...props}
                  setNavBarIsOpened={this.setNavBarIsOpened}
                  setNavBarIsClosed={this.setNavBarIsClosed} />
                <DisplayMapOnScreen {...props}
                  longitude={this.state.longitude}
                  latitude={this.state.latitude} />
              </div>)} />
            {/* ------------------------------ */}
            <Route exact path="/signup" render={(props) =>
              (<div>
                <Menu {...props}
                  setNavBarIsOpened={this.setNavBarIsOpened}
                  setNavBarIsClosed={this.setNavBarIsClosed} />
                <SignUp {...props}
                  longitude={this.state.longitude}
                  latitude={this.state.latitude} />
              </div>)} />
              <Route exact path="/login" render={(props) =>
              (<div>
                <Menu {...props}
                  setNavBarIsOpened={this.setNavBarIsOpened}
                  setNavBarIsClosed={this.setNavBarIsClosed} />
                <LogIn {...props}
                  longitude={this.state.longitude}
                  latitude={this.state.latitude} />
              </div>)} />
            {/* ------------------------------ */}
            {/* <Route exact path="/signin" component={SignIn}/> */}
          </Switch>
        </BrowserRouter>
        <br /> <br />
     
        <br /><br />
        <img id="carmelLogo" src={carmelLogo} height="60" alt="carmel 6000 logo" />
      </div>
    );
  }
}

export default Main;
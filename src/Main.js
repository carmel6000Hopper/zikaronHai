import React, { Component } from 'react';
import './App.css';
//import { firebase } from './firebase';
import { auth , firebase} from './firebase';
// import { CanvasArr } from './components/CanvasArr';
// import ImageUpload from './components/ImageUpload';

// import components 
import { UploadHandler } from './components/UploadHandler'
import { Camera } from './components/Camera.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { DisplayMapOnScreen } from './components/Location.js';
import { Menu } from './components/Menu.js';
import { GPS } from './components/GPS.js';
import Navigation from './components/Navigation.js';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';
import AccountPage from './components/Account';
// import images
import carmelLogo from './images/carmel6000logo.jfif'
import { PasswordForgetForm } from './components/PasswordForget';

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      finishTakingPictures: false,
      locationUserConfirmation: false,
      authUser : null,
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
    firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
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
                <Navigation  authUser={this.state.authUser} />
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

            <Route exact path="/gps" render={(props) =>
              (<div>
                <Menu {...props} />
                <DisplayMapOnScreen {...props}
                  longitude={this.state.longitude}
                  latitude={this.state.latitude} />
              </div>)} />

              <Route exact path="/forgetpass" render={(props) =>
              (<div>
                <Menu {...props} />
                <PasswordForgetForm />
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
                <SignUp  {...props} />
              </div>)} />
              <Route exact path="/account" render={(props) =>
              (<div>
                <Menu {...props} />
                <AccountPage  {...props} />
              </div>)} />
            <Route exact path="/signin" render={(props) =>
              (<div>
                <Menu {...props} />
                <SignIn />
              </div>)} />
              <Route exact path="/signout" render={(props) =>
              (<div>
                <Menu {...props} />
                <SignOut />
              </div>)} />

          </Switch>
        </BrowserRouter>

        <br /> <br />
        <img id="carmelLogo" src={carmelLogo} height="60" alt="carmel 6000 logo" />
      </div>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import { Camera } from './components/Camera.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { PicPage } from './Router';
import { LocationGPS } from './components/Location.js';
export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      finishTakingPictures: false,
      locationUserConfirmation: false,
      imageUrlArray: []
    });
    this.finishTakingPicturesFunc = this.finishTakingPicturesFunc.bind(this);
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

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PicPage} />

            <Route exact path="/camera"
              render={(props) =>
                <Camera {...props}
                  finishTakingPicturesFunc={this.finishTakingPicturesFunc} />} />

            <Route exact path="/upload"
              render={(props) =>
                <ImageUpload {...props}
                  imageUrlArr={this.state.imageUrlArray} />} />

            <Route exact path="/gps" component={LocationGPS} />


          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default Main;
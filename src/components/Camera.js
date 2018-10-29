import React, { Component } from 'react';
// import { Canvas } from './Canvas'
import "./Camera.css";
import { CanvasArr } from './CanvasArr'

// var numImagesTaken = 0;
// const MAX_NUM_OF_IMAGES = 5;

export class Camera extends Component {
  static CANVAS_WIDTH = 160;
  static CANVAS_HEIGHT = 120;
  constructor(props) {
    super(props);
    this.state = {
      canList: [],
      // snapShotsCounter: 0,
      video: '',
      hasToAddCanvas: false
    };

    this.canvasRef = React.createRef();
    this.CanvasArrRef = React.createRef();
    this.addSnapOnCanvas = this.addSnapOnCanvas.bind(this);
    this.hasAddedCanvas = this.hasAddedCanvas.bind(this);
  }

  hasAddedCanvas() {
    this.setState({ hasToAddCanvas: false });
  }

  setNavBarIsOpened() {
    // this.setState({ navBarIsOpened: true });
    document.getElementById("cam-container").style.marginRight = "250px";
  }

  setNavBarIsClosed() {
    // this.setState({ navBarIsOpened: false });
    document.getElementById("cam-container").style.marginRight = "0";
  }

  /** this function calls the the addCanvashandler when the snap-photo button is clicked */
  addSnapOnCanvas() {
    this.setState({ hasToAddCanvas: true }, () => { this.CanvasArrRef.current.addCanvasHandler() });
  }

  componentDidMount() {
    console.log("in component did mount - actualize video");

    var video = document.getElementById('video');

    // gets the video from the camera of the device - DOESN'T WORK ON PHONE!!!!
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.src = window.URL.createObjectURL(stream);
      video.play();
      this.setState({ video }, () => {
        console.log('Camera.js: this.state.video: ', this.state.video);
      });
    })
  }

  onFinish = () => {
    var URLArray = [];

    // save url of the canvas in url array
    for (var i = 0; i < this.state.canList.length; i++) {
      console.log("this.state.canList[i]" + this.state.canList[i].elem.ref.current)
      var dataURL = this.state.canList[i].elem.ref.current.toDataURL();
      console.log("dataURL" + dataURL);
      URLArray.push(dataURL);
    }

    console.log("on finish this.props" + this.props);
    this.props.finishTakingPicturesFunc(URLArray);

    // router - go to the next page - upload Handler
    this.props.history.push('/upload');
  }

  render() {
    return (
      <div id="cam-container">
        <div id="video-border">
          <video id="video" width="320" height="240" autoPlay></video>
          <div className="container"></div>
          <button id="snap" onClick={this.addSnapOnCanvas}></button>
        </div>

        <button id="finishButton" onClick={this.onFinish} >Finish</button>
        <br /><br />
        <button onClick={() => { this.props.history.push('/') }} >back</button>
        <label id="resultURL"></label>
        <div className="snapshots-container"></div>

        <CanvasArr
          hasToAddCanvas={this.state.hasToAddCanvas}
          hasAddedCanvas={this.hasAddedCanvas}
          ref={this.CanvasArrRef}
          video={this.state.video}
        />

      </div>
    );
  }
}

export default Camera;

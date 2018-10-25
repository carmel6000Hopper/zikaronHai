import React, { Component } from 'react';
// import { Canvas } from './Canvas'
import "./Camera.css";
import { CanvasArr } from './CanvasArr'
var numImagesTaken = 0;
const MAX_IMAGES_TAKEN = 5;

export class Camera extends Component {
  static CANVAS_WIDTH = 160;
  static CANVAS_HEIGHT = 120;
  constructor(props) {
    super(props);
    this.state = {
      canList: [],
      snapShotsCounter: 0,
      video: '',
      hasToAddCanvas: false
    };
    this.canvasRef = React.createRef();
    // this.deleteCanvas = this.deleteCanvas.bind(this);
    this.addSnapOnCanvas = this.addSnapOnCanvas.bind(this);
    this.hasAddedCanvas = this.hasAddedCanvas.bind(this);
    this.drawImageOnCanvas = this.drawImageOnCanvas.bind(this);
    //this.videoHandler = this.videoHandler.bind(this);
  }
  hasAddedCanvas() {
    this.setState({ hasToAddCanvas: false });
  }
  setNavBarIsOpened() {
    //this.setState({ navBarIsOpened: true });
    document.getElementById("cam-container").style.marginRight = "250px";
  }
  setNavBarIsClosed() {
    //this.setState({ navBarIsOpened: false });
    document.getElementById("cam-container").style.marginRight = "0";
  }
  addSnapOnCanvas() {
    console.log("addSnapOnCanvas");
    this.setState({ hasToAddCanvas: true });
  }
  drawImageOnCanvas(ctx){
    ctx.drawImage(this.state.video, 0, 0, Camera.CANVAS_WIDTH, Camera.CANVAS_HEIGHT);
  }

  componentDidMount() {
    console.log("in component did mount - actualize video");
    var video = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.src = window.URL.createObjectURL(stream);
      video.play();
      this.setState({ video });
      console.log('video is');
      console.log(video);
    })

  }
  // componentDidMount() {

  //   let canList = [];
  //   var video = document.getElementById('video');
  //   navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  //     video.src = window.URL.createObjectURL(stream);
  //     video.play();
  //    // document.getElementById("snap").addEventListener("click", () => {
  //       // if (numImagesTaken < MAX_IMAGES_TAKEN) {

  //         // create dynamically CANVAS object
  //     //     let canvasObj = {};
  //     //     // canvasObj.ref = React.createRef();
  //     //     // canvasObj.elem =
  //     //     canvasObj.key = this.state.snapShotsCounter
  //     //     canvasObj.elem = <Canvas snapShotsCounter={this.state.snapShotsCounter}
  //     //       video={video} 
  //     //       key={this.state.snapShotsCounter}
  //     //        deleteCanvas ={this.deleteCanvas} 
  //     //        ref={canvasRef => (this.canvasRef = canvasRef)}/>;

  //     //     console.log("printed canvas");
  //     //     numImagesTaken++;

  //     //     // add canvas object to the canvas List 
  //     //     canList.push(canvasObj);
  //     //     this.setState({ canList, snapShotsCounter: this.state.snapShotsCounter + 1 }, () => {
  //     //       // console.log("canvasObj" + canvasObj);
  //     //       // console.log ("canvasObj.elem.ref is" + canvasObj.elem.ref);

  //     //       // console.log ("canvasObj.elem.ref.current is" + canvasObj.elem.ref.current);
  //     //       // let ctx = canvasObj.elem.ref.current.getContext('2d');
  //     //       // ctx.drawImage(video, 0, 0, Camera.CANVAS_WIDTH, Camera.CANVAS_HEIGHT);
  //     //     });
  //     //     // for (var i=0; i <canList.length ; i++){
  //     //     //   // let ctx = canList.elem.ref.current.getContext('2d');
  //     //     //   // ctx.drawImage(video, 0, 0, 160, 120);
  //     //     // }
  //     //     console.log("canlist", canList);
  //     //   }
  //     //   else {
  //     //     alert("too many pictures taken");
  //     //   }

  //     });
  //   })
  // }

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
    this.props.history.push('/uploadHandler');
  }
  // deleteCanvas(e){
  //   var index = this.state.canList.indexOf(e.target.key);
  //   this.state.canList.splice(index, 1);
  //   console.log("deleteCanvas" + this.state.canList);
  // }

  render() {
    let marginSnap = "";
    let marginContainer = "";
    let marginVideo = '';
    if (this.props.navBarIsOpened === true) {
      marginSnap = "17.4% 6.5%";
      marginContainer = "6% 10%";
      marginVideo = "1.8% 6.5%";
    }
    else {
      marginSnap = "17.4% 46.5%";
      marginContainer = "6% 40%";
      marginVideo = "1.8% 35.5%";
    }
    return (
      <div id="cam-container" style={{ margin: marginContainer, marginRight: this.props.marginRight }}>
        <div id="video-border">
          <video id="video" width="320" height="240" autoPlay style={{ margin: marginVideo, marginRight: this.props.marginRight }}></video>
          <div className="container"></div>
          <button id="snap" onClick={this.addSnapOnCanvas} style={{ margin: marginSnap, marginRight: this.props.marginRight }}></button>
        </div>
        <button id="finishButton" onClick={this.onFinish} >Finish</button>
        <br /><br />
        <button onClick={() => { this.props.history.push('/') }} >back</button>
        <label id="resultURL"></label>
        <div className="snapshots-container">
        </div>
        <CanvasArr
          // hasToAddCanvas={this.state.hasToAddCanvas}
          // hasAddedCanvas={this.hasAddedCanvas} 
          drawImageOnCanvas ={this.drawImageOnCanvas}/>
      </div>
    );
  }
}

export default Camera;

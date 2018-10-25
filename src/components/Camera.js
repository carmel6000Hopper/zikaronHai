import React, { Component } from 'react';
import "./Camera.css";

var numImagesTaken = 0;
const MAX_IMAGES_TAKEN = 5;


export class Camera extends Component {

  static CANVAS_WIDTH = 160;
  static CANVAS_HEIGHT = 120;

  constructor(props) {
    super(props);
    this.state = { canList: [], snapShotsCounter: 0 };
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    let canList = [];
    var video = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.src = window.URL.createObjectURL(stream);
      video.play();
      document.getElementById("snap").addEventListener("click", () => {

        if (numImagesTaken < MAX_IMAGES_TAKEN) {

          // create dynamically CANVAS object
          let canvasObj = {};
          canvasObj.ref = React.createRef();
          canvasObj.elem = <canvas width={Camera.CANVAS_WIDTH} height={Camera.CANVAS_HEIGHT}
            ref={this.canvasRef}
            key={this.state.snapShotsCounter + 1}>
            Canvas Item
          </canvas>

          console.log("printed canvas");
          numImagesTaken++;

          // add canvas object to the canvas List 
          canList.push(canvasObj);

          this.setState({ canList, snapShotsCounter: this.state.snapShotsCounter + 1 }, () => {
            let ctx = canvasObj.elem.ref.current.getContext('2d');
            ctx.drawImage(video, 0, 0, Camera.CANVAS_WIDTH, Camera.CANVAS_HEIGHT);
          });
          console.log("canvases list", canList);
        }
        else {
          alert("too many pictures taken");
        }

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
    this.props.history.push('/uploadHandler');
  }

  render() {
    const canList = this.state.canList;

    return (
      <div id="cam-container">
        <div id="video-border">
          <video id="video" width="320" height="240" autoPlay></video>
          <div className="container"></div>
          <button id="snap"></button>
        </div>
        <button id="finishButton" onClick={this.onFinish} >Finish</button>
        <br /><br />
        <button onClick={() => { this.props.history.push('/') }} >back</button>
        <label id="resultURL"></label>
        <div className="snapshots-container">
          {canList.map((canvas) => canvas.elem)}
        </div>

      </div>
    );
  }
}


export default Camera;

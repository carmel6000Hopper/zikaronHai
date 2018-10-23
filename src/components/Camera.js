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


          /*
          var canv = document.createElement("canvas");
          canv.setAttribute('width', CANVAS_WIDTH);
          canv.setAttribute('height', CANVAS_HEIGHT);
          canv.setAttribute('id', 'canv' + numImagesTaken);
          */


          //let canvasRef=React.createRef();


          let canvasObj = {};
          canvasObj.ref = React.createRef();
          canvasObj.elem = <canvas width={Camera.CANVAS_WIDTH} height={Camera.CANVAS_HEIGHT}
            ref={this.canvasRef}
            key={this.state.snapShotsCounter + 1}>
            Canvas Item
          </canvas>

          //console.log("canvas ref ctx",this.canvasRef.current.getContext("2d"));          
          //var ctx = canvasElement.getContext("2d");
          //ctx.drawImage(video, 0, 0, Camera.CANVAS_WIDTH, Camera.CANVAS_HEIGHT);
          console.log("printed canvas");
          numImagesTaken++;

          // this.setState({ snapShotsCounter: this.state.snapShotsCounter + 1 }, () => {

          // });

          canList.push(canvasObj);

          this.setState({ canList , snapShotsCounter: this.state.snapShotsCounter + 1}, () => {
            //console.log("canvas ref ctx", this.canvasRef.current.getContext('2d'));
            let ctx=canvasObj.elem.ref.current.getContext('2d');
            //let ctx = this.canvasRef.current.getContext('2d');
            ctx.drawImage(video, 0, 0, Camera.CANVAS_WIDTH, Camera.CANVAS_HEIGHT);
          });
          console.log("canvases list", canList);

          //document.body.appendChild(canv);
          /*
          
          var canvasElement = document.getElementById(canv.getAttribute('id'));
          console.log("canv.getAttribute('id'): ", canv.getAttribute('id'));
          console.log("canvasElement: ", canvasElement);
          if (canvasElement.getContext) {
            drawVideoOnCanvas(canvasElement, video);
          } 
          */
        }
        else {
          alert("too many pictures taken");
        }

      });
    })
    // function drawVideoOnCanvas(canvasElement, video) {
    //   var ctx = canvasElement.getContext("2d");
    //   ctx.drawImage(video, 0, 0, Camera.CANVAS_WIDTH, Camera.CANVAS_HEIGHT);
    //   console.log("printed canvas");
    //   numImagesTaken++;
    // }
  }

  onFinish = () => {
    var URLArray = [];
    for (var i = 0; i < this.state.canList.length; i++) {
      console.log("this.state.canList[i]" + this.state.canList[i].elem.ref.current)
      var dataURL = this.state.canList[i].elem.ref.current.toDataURL();
      console.log("dataURL" + dataURL);
      URLArray.push(dataURL);
    }
    // for (var i = 0; i < numImagesTaken; i++) {
    //   var currCanvas = 'canv' + i;
    //   var canvas = document.getElementById(currCanvas);
    //   var dataURL = canvas.toDataURL();

    //   URLArray.push(dataURL);
    // }
    console.log("on finish this.props" + this.props);
    this.props.finishTakingPicturesFunc(URLArray);
    this.props.history.push('/uploadHandler');
  }

  render() {

    const canList = this.state.canList;

    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    return (
      <div id="cam-container">
        <div id="video-border">
          <video id="video" width="320" height="240" autoPlay></video>
          <div className="container"></div>
          <button id="snap"></button>
        </div>
        {/* <canvas id="canvas" width="400" height="120"></canvas> */}
        <button id="finishButton" onClick={this.onFinish} >Finish</button>
        <br/><br/>
        <button onClick={()=>{this.props.history.push('/')}} >back</button>
        <label id="resultURL"></label>

        {/* // Not adding `{ audio: true }` since we only want video now */}

        <div className="snapshots-container">
          {canList.map((canvas) => canvas.elem)}
        </div>

      </div>
    );
  }
}


export default Camera;

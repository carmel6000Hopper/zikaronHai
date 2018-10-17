import React, { Component } from 'react';
import "./Camera.css";

var num_images_taken = 0;
const MAX_IMAGES_TAKEN = 5;
const CANVAS_WIDTH = 160, CANVAS_HEIGHT = 120;


export class Camera extends Component {
  componentDidMount() {
    var video = document.getElementById('video');

    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();

      document.getElementById("snap").addEventListener("click", function () {
        if (num_images_taken < MAX_IMAGES_TAKEN) {
          var canv = document.createElement("canvas");
          canv.setAttribute('width', CANVAS_WIDTH);
          canv.setAttribute('height', CANVAS_HEIGHT);
          canv.setAttribute('id', 'canv' + num_images_taken);
          document.body.appendChild(canv);
          var canvasElement = document.getElementById(canv.getAttribute('id'));
          console.log("canv.getAttribute('id'): ", canv.getAttribute('id'));
          console.log("canvasElement: ", canvasElement);
          if (canvasElement.getContext) {
            makePlot(canvasElement, video);
          }
        }
        else {
          alert("too many pictures taken");
        }

      });
    })
    function makePlot(canvasElement, video) {
      var ctx = canvasElement.getContext("2d");
      ctx.drawImage(video, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      console.log("printed canvas");
      num_images_taken++;
    }
  }

  onFinish = () => {
    var URLArray = [];
    for (var i = 0; i< num_images_taken ; i++){
      var currCanvas  = 'canv'+ i;
      var canvas = document.getElementById(currCanvas);
      var dataURL = canvas.toDataURL();
    
      URLArray.push(dataURL);  
    }
    this.props.finishTakingPicturesFunc(URLArray);
    this.props.history.push('/upload');
  }

  render() {

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
      </div>
    );
  }
}


export default Camera;

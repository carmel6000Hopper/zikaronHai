import React, { Component } from 'react';
import "./Camera.css";

var num_images_taken = 0;
const MAX_IMAGES_TAKEN = 5;


export class Camera extends Component {
  constructor(props){
    super(props)
    console.log("props" + props);
    console.log(this.props.saveCanvasURL)
    this.state = ({
     theURL: ""
    });
  }

  componentDidMount() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();

      document.getElementById("snap").addEventListener("click", function () {
        //context.drawImage(video, 0, 80 , 80, 60);

        if (num_images_taken < MAX_IMAGES_TAKEN) {
          console.log(num_images_taken * 80);

          context.drawImage(video, num_images_taken * 80, 0, 80, 60);
          //context.drawImage(video, 0, 80 , 80, 60);
          num_images_taken++;
        }
        else {
          alert("too many pictures taken");
        }

      });
    })
  }

  onFinish = ()=> {
    var canvas = document.getElementById('canvas');
    var dataURL = canvas.toDataURL();
    this.props.finishTakingPicturesFunc(dataURL);
  }

  render() {

    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    return (
      <div  id = "cam-container">
        <div id = "video-border">
          <div><video id="video" width="320" height="240" autoPlay></video></div>
        </div>
        <button id="snap">Snap Photo</button>
        <canvas id="canvas" width="400" height="120"></canvas>
        <button id="finishButton" onClick={this.onFinish}>Finish</button>
        <label id="resultURL"></label>

        {/* // Not adding `{ audio: true }` since we only want video now */}
      </div>
    );
  }
}


export default Camera;

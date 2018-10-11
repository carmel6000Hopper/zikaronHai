import React, { Component } from 'react';
// import "./Camera.css";

var num_images_taken = 0;
const MAX_IMAGES_TAKEN = 5; 


export class Camera extends Component {
  componentDidMount() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();

      document.getElementById("snap").addEventListener("click", function () {   
        //context.drawImage(video, 0, 80 , 80, 60);

        if (num_images_taken < MAX_IMAGES_TAKEN ){
          console.log(num_images_taken * 80);

          context.drawImage(video, num_images_taken * 80 ,0, 80, 60);
          //context.drawImage(video, 0, 80 , 80, 60);
          num_images_taken ++ ;
        }
        else{
          alert("too many pictures taken");
        }
        
      });
    })
  }

  render() {
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    return (
      <div>

        <video id="video" width="320" height="240" autoPlay></video>
        <button id="snap">Snap Photo</button>
        <canvas id="canvas" width="400" height="120"></canvas>

        {/* // Not adding `{ audio: true }` since we only want video now */}
      </div>
    );
  }
}


export default Camera;

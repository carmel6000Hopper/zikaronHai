import React, { Component } from 'react';

export class Camera extends Component {
  componentDidMount() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();


      document.getElementById("snap").addEventListener("click", function () {
        context.drawImage(video, 0, 0, 160, 120)
      })
    }
    )
  }

  render() {
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    return (
      <div>

        <video id="video" width="320" height="240" autoplay></video>
        <button id="snap">Snap Photo</button>
        <canvas id="canvas" width="160" height="120"></canvas>


        {/* // Not adding `{ audio: true }` since we only want video now */}
      </div>
    );
  }
}


export default Camera;

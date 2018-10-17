import React, { Component } from 'react';
import "./Camera.css";
import {Canvas} from "./Canvas"

const MAX_IMAGES_TAKEN = 5;
const CANVAS_WIDTH = 160, CANVAS_HEIGHT = 120;

export class CameraTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasArr: [],
            listId: [],
            num_images_taken : 0,
            currId : 0
        }
        this.deleteCanvasHandle = this.deleteCanvasHandle.bind(this);
        this.addCanvashandle = this.addCanvashandle.bind(this);
        this.drawVideoOnCanvas = this.drawVideoOnCanvas.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    deleteCanvasHandle = (index) => {
        const copyCanvas = Object.assign([], this.state.canvasArr);
        copyCanvas.splice(index, 1);
        this.setState({
            canvasArr: copyCanvas
        })
        this.handleDelete(index);
        this.state.num_images_taken--;
    }
    addCanvashandle = () => {
        let can = <Canvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} id={this.state.currId} />
        var canvasArrTmp = this.state.canvasArr.slice();
        canvasArrTmp.push(can);
        this.setState({
            canvasArr: canvasArrTmp
        })
    }

    componentDidMount() {
        var video = document.getElementById('video');
        navigator.mediaDevices.getUserMedia({ video: true }).then=(stream)=> {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            var canvasElement = document.getElementById(this.state.currId);
            if (canvasElement.getContext) {
                this.drawVideoOnCanvas(canvasElement, video);
            }
        }
    }

    handleDelete(id) {
        this.setState(prevState => ({
            listId: prevState.listId.filter(el => el != id)
        }));
    }
    drawVideoOnCanvas = (canvasElement, video) => {
        var ctx = canvasElement.getContext("2d");
        ctx.drawImage(video, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        console.log("printed canvas");
        var listIdTmp = this.state.listId.slice();
        listIdTmp.push(this.state.currId);
        this.setState({
            listId: listIdTmp
        })
        this.state.num_images_taken++;

        this.state.currId++;
    }


    onFinish = () => {
        var URLArray = [];
        for (var i = 0; i < this.state.num_images_taken; i++) {
            var currCanvas = 'canv' + this.state.listId[i];
            var canvas = document.getElementById(currCanvas);
            var dataURL = canvas.toDataURL();
            URLArray.push(dataURL);
        }
        this.props.finishTakingPicturesFunc(URLArray);
    }

    render() {

        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return (
            <div id="cam-container">
                <div id="video-border">
                    <div><video id="video" width="320" height="240" autoPlay></video></div>
                    <div className="container"></div>
                    <button id="snap" onClick={this.addCanvashandle}></button>
                </div>
                <button id="finishButton" onClick={this.onFinish}>Finish</button>
                <label id="resultURL"></label>

                {/* // Not adding `{ audio: true }` since we only want video now */}
            </div>
        );
    }
}


export default CameraTest;

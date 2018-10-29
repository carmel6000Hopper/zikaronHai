import React, { Component } from 'react';
import { Canvas } from './Canvas'
import "./Camera.css";

var numImagesTaken = 0;
const MAX_NUM_OF_IMAGES = 5;

export class CanvasArr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasList: [],
      ctxDict: [],
      canvasKeys: [],
      listItems: [],
      currKey: 0,
      video: ''
    };

    this.addCanvasHandler = this.addCanvasHandler.bind(this);
    this.addCanvas = this.addCanvas.bind(this);
    this.selectCanvas = this.selectCanvas.bind(this);
    this.deleteCanvas = this.deleteCanvas.bind(this);
  }

  addCanvasHandler() {
    if (numImagesTaken <= MAX_NUM_OF_IMAGES) {
      this.setState({ video: this.props.video }, () => {
        if (this.props.hasToAddCanvas === true) {
          this.addCanvas();
          this.props.hasAddedCanvas();
        }
      });
      numImagesTaken++;
      console.log("addCanvasHandler: numImagesTaken: ", numImagesTaken);
    }
    else {
      alert("TOO MANY IMAGES TAKEN!!");
    }
  }

  selectCanvas() {

  }

  updateContextDict(key, ctx) {
    var ctxDict = this.state.ctxDict // create an empty array
    ctxDict.push({
      key: key,
      value: ctx
    });
    this.setState({ ctxDict });
  }

  deleteCanvas(e) {
    var index = this.state.canvasList.indexOf(e.target.key);
    let canvasList = this.state.canvasList;
    let canvasKeys = this.state.canvasKeys;
    canvasList.splice(index, 1);
    canvasKeys.splice(index, 1);
    this.setState({ canvasList, canvasKeys }, () => {
      numImagesTaken--;
      console.log("deleteCanvas: numImagesTaken: ", numImagesTaken);
      console.log("deleteCanvas: " + this.state.canvasList);
    });
  }

  addCanvas() {
    this.state.canvasKeys.push(this.state.currKey);
    this.setState({ currKey: this.state.currKey + 1 });

    var canvas = <Canvas
      currKey={this.state.currKey}
      selectCanvas={this.selectCanvas}
      deleteCanvas={this.deleteCanvas}
      video={this.state.video}
      updateContextDict={this.updateContextDict}
    />

    let canvasList = this.state.canvasList;
    canvasList.push(canvas);
    this.setState({ canvasList }, () => {
      console.log("addCanvas: ", this.state.canvasList);
    });
  }

  render() {
    console.log("in render , the canvas list is " + this.state.canvasList);
    const listItems = this.state.canvasList.map((canvas, i) =>
      <ListItem key={this.state.canvasKeys[i].toString()}
        canvas={canvas}
      />
    );

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
function ListItem(props) {
  return <li>{props.canvas}</li>;
}

export default CanvasArr;

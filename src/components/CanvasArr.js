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

  /** this function handles adding the canvas and adds a canvas only if needed 
   * according to the amount of canvases displayed on the screen
   * and if the hasToAddCanvas state is true - if false then doesn't add a new canvas
  */
  addCanvasHandler() {
    if (numImagesTaken < MAX_NUM_OF_IMAGES) {
      this.setState({ video: this.props.video }, () => {
        // checks if actually adding a canvas is needed - true of false
        if (this.props.hasToAddCanvas === true) {
          this.addCanvas();
          this.props.hasAddedCanvas();
          numImagesTaken++;
          console.log("addCanvasHandler: numImagesTaken: ", numImagesTaken);
        }
      });
    }
    else {
      alert("TOO MANY IMAGES TAKEN!!");
    }
  }

  selectCanvas() {
    alert("select canvas");
  }

  // updateContextDict(key, ctx) {
  //   var ctxDict = this.state.ctxDict // create an empty array
  //   ctxDict.push({
  //     key: key,
  //     value: ctx
  //   });
  //   this.setState({ ctxDict });
  // }

  /** this function is called when the X button is clicked and is responsible to delete a canvas
   * the canvas is deleted from the canvas array according to its key and index
   * the counter is updated to numImagesTaken--
   */
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

  /** this function creates a new canvas with a unique key using the canvas component
   * and adds it to the canvasList*/
  addCanvas() {
    // update the key of the new canvas to be unique
    this.state.canvasKeys.push(this.state.currKey);
    this.setState({ currKey: this.state.currKey + 1 });

    // calls the canvas component to create a new canvas
    var canvas = <Canvas
      currKey={this.state.currKey}
      selectCanvas={this.selectCanvas}
      deleteCanvas={this.deleteCanvas}
      video={this.state.video}
    // updateContextDict={this.updateContextDict}
    />

    // add the new canvas to the canvasList
    let canvasList = this.state.canvasList;
    canvasList.push(canvas);
    this.setState({ canvasList }, () => {
      console.log("addCanvas: ", this.state.canvasList);
    });
  }

  render() {
    console.log("in render , the canvas list is " + this.state.canvasList);

    // go over the canvasList and turn every canvas into an item in a list using the ListItem function
    const listItems = this.state.canvasList.map((canvas, i) =>
      <ListItem
        key={this.state.canvasKeys[i].toString()}
        canvas={canvas}
      />
    );

    // display all the list items (canvases) on screen
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

/** this function turns the props (canvas) into a list item and returns it so it could be displayed on screen */
function ListItem(props) {
  return <li>{props.canvas}</li>;
}

export default CanvasArr;

import React, { Component } from 'react';
import { Canvas } from './Canvas'
import "./Camera.css";
import "./CanvasArr.css";

var numImagesTaken = 0;
const MAX_NUM_OF_IMAGES = 5;

export class CanvasArr extends Component {

  static RESIZE_CANVAS_WIDTH = 240;
  static RESIZE_CANVAS_HEIGHT = 180;

  constructor(props) {
    super(props);
    this.state = {
      canvasList: [],
      canvasKeys: [],
      listItems: [],
      currKey: 0,
      video: '',
      isSelected: false
    };

    this.newCanvasRef = React.createRef();

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

  //small: width: 160, height 120
  /** this function creates a new canvas with the info of the selected canvas 
   * with a different size that is showed on the screen 
   * the new canvas will be shown on top of the other elements of the page - width 100%, z-index 3
   * 
   * TODO
   */
  selectCanvas(currCanvasRef) {
    console.log("selectCanvas: currCanvasRef: ", currCanvasRef);
    this.newCanvasRef = currCanvasRef;
    // let newCtx = this.newCanvasRef.current.getContext('2d');
    // newCtx.drawImage(currCanvasRef, 0, 0);
    console.log("this.newCanvasRef.current: ", this.newCanvasRef.current);

    /**____________________________________________________________________________ */
    /** create new canvas dynamically - problem with REF (null) - doesnt work !?!??!?!!  */

    // let newCanvas = <canvas
    //   width={CanvasArr.RESIZE_CANVAS_WIDTH}
    //   height={CanvasArr.RESIZE_CANVAS_HEIGHT}
    //   ref={this.newCanvasRef}
    // />
    // console.log("newCanvas: ", newCanvas);

    // let newCtx = this.canvasRef.current.getContext('2d');
    // newCtx.drawImage(this.state.video, 0, 0, Canvas.CANVAS_WIDTH, Canvas.CANVAS_HEIGHT);

    // let newCtx = newCanvas.getContext('2d');
    // console.log("newCtx: ", newCtx);
    // newCtx.drawImage(currCanvasRef, 0, 0);

    /**____________________________________________________________________________ */
    /** resize canvas - uses the old canvas ref so changes the old canvas - doesnt work!!!! */

    // let newCanvas = currCanvasRef;
    // console.log("newCanvas: ", newCanvas);
    // newCanvas.width = newCanvas.RESIZE_CANVAS_WIDTH;
    // newCanvas.height = newCanvas.RESIZE_CANVAS_HEIGHT;
    // console.log("selectCanvas after resize: newCanvas: ", newCanvas);

    /**____________________________________________________________________________ */
    /** resize canvas - the canvas is resized but the image on it disappears - doesnt work!!! */

    // let currKey = currCanvasRef.currKey;
    // if (this.state.isSelected) {
    //   this.setState({ isSelected: !this.state.isSelected }, () => {
    //     console.log("unselecting: this.state.isSelected: ", this.state.isSelected);
    //   });
    //   currCanvasRef.width = 160;
    //   currCanvasRef.height = 120;
    //   console.log("unselecting: currCanvasRef: ", currCanvasRef);
    // }
    // else { //if the canvas is not selected, then select it 
    //   this.setState({ isSelected: !this.state.isSelected }, () => {
    //     console.log("selecting: this.state.isSelected: ", this.state.isSelected);
    //   });

    //   currCanvasRef.width = 240;
    //   currCanvasRef.height = 180;
    //   console.log("selecting: currCanvasRef: ", currCanvasRef);

    //   //this code isnt used yet
    //   let canvasList = this.state.canvasList;
    //   let canvasKeys = this.state.canvasKeys;
    //   console.log("selectCanvas: currKey: ", currKey);
    //   console.log("selectCanvas: canvasKeys: ", canvasKeys);
    //   console.log("selectCanvas: canvasList: ", canvasList);

    //   /** get the index of currKey from the canvasKeys array
    //    * this is the index of the canvas also in the canvasList array
    //    */
    //   let index = canvasKeys.indexOf(currKey);
    //   console.log("selectCanvas: index: ", index);

    //   //the specific position of the selected canvas in the canvasList array according to its index
    //   console.log("canvasList[index]: ", canvasList[index]);

    //   // canvasList[index].type.style.width = 240;
    // }
  }

  /** this function is called when the X button is clicked and is responsible to delete a canvas
   * the canvas is deleted from the canvas array according to its key and index
   * the counter is updated to numImagesTaken--
   */
  deleteCanvas(currKey) {
    let canvasList = this.state.canvasList;
    let canvasKeys = this.state.canvasKeys;
    console.log("deleteCanvas: currKey: ", currKey);
    console.log("deleteCanvas: canvasKeys: ", canvasKeys);
    console.log("deleteCanvas: canvasList: ", canvasList);

    /** get the index of currKey from the canvasKeys array
     * this is the index of the canvas also in the canvasList array
     */
    let index = canvasKeys.indexOf(currKey);
    console.log("deleteCanvas: index: ", index);

    // remove the index from the canvasList array and from the canvasKeys array
    canvasList.splice(index, 1);
    canvasKeys.splice(index, 1);

    //update the state of the canvasList and canvasKeys arrays with the removed index
    this.setState({ canvasList, canvasKeys }, () => {
      numImagesTaken--; //update the numImagesTaken as they changed when the canvas was removed
      console.log("deleteCanvas: numImagesTaken: ", numImagesTaken);
      console.log("deleteCanvas splice: canvasKeys: ", this.state.canvasKeys);
      console.log("deleteCanvas splice: canvasList: ", this.state.canvasList);
    });
  }

  /** this function creates a new canvas with a unique key using the canvas component
   * and adds it to the canvasList*/
  addCanvas() {
    // update the key of the new canvas to be unique
    this.state.canvasKeys.push(this.state.currKey);
    this.setState({ currKey: this.state.currKey + 1 }, () => {
      // console.log("addCanvas: this.state.currKey: ", this.state.currKey); //next key
      console.log("addCanvas: this.state.canvasKeys: ", this.state.canvasKeys);
    });

    // calls the canvas component to create a new canvas
    var canvas = <Canvas
      currKey={this.state.currKey}
      selectCanvas={this.selectCanvas}
      deleteCanvas={this.deleteCanvas}
      video={this.state.video}
    />

    console.log("addCanvas: canvas: ", canvas);

    // add the new canvas to the canvasList
    let canvasList = this.state.canvasList;
    canvasList.push(canvas);
    this.setState({ canvasList }, () => {
      console.log("addCanvas: this.state.canvasList: ", this.state.canvasList);
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
        <ul id="ul-canvas-list">
          {listItems}
        </ul>
        <canvas ref={this.newCanvasRef}></canvas>
      </div>
    );
  }
}

/** this function turns the props (canvas) into a list item and returns it so it could be displayed on screen */
function ListItem(props) {
  return <li>{props.canvas}</li>;
}

export default CanvasArr;

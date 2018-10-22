import React, { Component } from 'react';
// import { sidebarOpenStyle, mainStyleOpen, mainStyleClose, sidebarCloseStyle, sidebarClosebtnStyle, openbtnStyle } from './MenuStyle'
// export class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             styleButn: sidebarClosebtnStyle ,
//             styleSideBar:sidebarCloseStyle ,
//             mainStyle: mainStyleClose 
//         }
//         this.openSideBar = this.openSideBar.bind(this);
//         this.closeSideBar = this.closeSideBar.bind(this);
//     }
//     openSideBar() {

//         this.setState({ styleSideBar: sidebarOpenStyle, mainStyle: mainStyleOpen })
//         console.log("sidebarOpenStyle", sidebarOpenStyle)
//         console.log("mainStyle", this.state.mainStyle)
//     }
//     closeSideBar() {

//         this.setState({ styleSideBar: sidebarCloseStyle, mainStyle: mainStyleClose })
//         console.log("sidebarClosebtnStyle", sidebarCloseStyle)
//         console.log("mainStyle", this.state.mainStyle)
//     }

//     render() {
//         return (
//             <div >
//                 <div style={Object.assign({}, this.state.styleSideBar, this.state.mainStyle)}>
//                     <a href="javascript:void(0)" style={Object.assign({}, this.state.styleSideBar, sidebarClosebtnStyle, this.state.mainStyle)}  onClick={this.closeSideBar}>×</a>
//                     <a style = {Object.assign({}, this.state.styleSideBar, this.state.mainStyle)} href="#" ></a>
//                     <a style={Object.assign({}, this.state.styleSideBar, this.state.mainStyle)} href="#" >Location</a>
//                 </div>
//                 <button style= {openbtnStyle} onClick={this.openSideBar} >☰MENU </button>
//             </div>
//         )
//     }
// }

// // import 'react-push-menu/styles/component.css';
// // import PushMenu from 'react-push-menu';

// // export class Menu extends Component {
// //     render() {
// //         return (
// //             <PushMenu
// //                 nodes={this.state.menu}
// //                 type={'cover'}
// //                 propMap={{ url: 'link' }}>

// //                 <div className="rpm-trigger" id="rpm-trigger">trigger</div>

// //             </PushMenu>
// //         );
// //     }
// // }

//import ReactDOM from 'react-dom';
import Orbit from '../../components/Orbit/Orbit';
import Shapes from '../../components/Shapes/Shapes.js';
import Colors from '../../components/Colors/Colors.js';
import Background from '../../components/background-color/background-color.js';
import './GameMenu.scss';
import { NavLink } from "react-router-dom"
import * as d3 from 'd3';

let backgroundcurrent = null;

class Menu extends Component{
    constructor(props){
        super(props)
        this.DisplayColorsMenu = this.DisplayColorsMenu.bind(this);
        this.DisplayShapesMenu = this.DisplayShapesMenu.bind(this);
        this.DisplayBackgroundMenu = this.DisplayBackgroundMenu.bind(this);
        this.changeObjectColor = this.changeObjectColor.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.myRef = React.createRef();


        
    this.shapes = {
        "butterfly": {
          fill: "pink",//I want fill = rect.fill
          stroke: "rgba(0,0,0,.4)",
          scale: "8",
          d: "M49.4,9.5c0,0,0.6-1.3,0-1.4c-0.6-0.1-7.6,1.2-11,3.6c-1.7,1.5-7.8,4.8-11.4,12.1c-0.6-0.2-1.4-0.1-1.5-0.4c-0.1-0.4,0.7-1.2,0.7-1.2c0.3-0.3,0.6-0.8,0.6-1.4c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9c0,0.5,0.2,1,0.6,1.4c0,0,0.7,0.9,0.6,1.4c-0.1,0.2-0.5,0.3-1,0.5c-3.6-7.6-9.8-11-11.5-12.5C8.2,9.3,1.2,8,0.6,8c-0.6,0.1,0,1.4,0,1.4s-0.9,1.6-0.5,2.1s0,1.5,0.5,2c0.5,0.5-0.5,2.4,0.4,2.8c1,0.4,0.1,1.9,0.7,2.5c0.6,0.7,0.7,1.7,1,2c0.3,0.3,0.7,0.3,0.5,2.1c-0.2,1.8,1.4,1.6,2,3.9c0.6,2.3,4.9,2.6,4.9,2.6l-2.3,3.7l-0.3,2.3L8,38.4l1.6,1.1l0.3,1.2l1.8,0.2l1.7,0.9h1.7h1.5l2-1c0,0,1.5-0.2,1.8-0.3c0.1-4.9,2.1-7.5,3.2-8.5c0,0.1,0,0.2,0.1,0.3c0.6,3.4,0.9,7.3,1.2,9.6c0-1.7,0.5-5.9,1.2-9.6c0-0.1,0-0.2,0.1-0.3c1,0.9,3.2,3.5,3.3,8.6c0.4,0.1,1.8,0.3,1.8,0.3l2,1h1.5h1.7l1.7-0.9l1.8-0.2l0.3-1.2l1.6-1.1l0.4-2.9l-0.3-2.3l-2.3-3.7c0,0,4.3-0.4,4.9-2.6c0.6-2.3,2.2-2.1,2-3.9c-0.2-1.8,0.2-1.8,0.5-2.1c0.3-0.3,0.4-1.4,1-2s-0.2-2.1,0.7-2.5c0.9-0.4,0-2.3,0.4-2.8c0.5-0.5,0.1-1.5,0.5-2C50.3,11.1,49.4,9.5,49.4,9.5z",
        },
        "bear": {
          fill: "rgba(204,117,26,.9)",
          stroke: "rgba(0,0,0,.4)",
          d: "M44.4,28.7c0-3.3-2.7-6-6-6c-1.3,0-2.6,0.4-3.6,1.2c-0.7-0.7-1.5-1.4-2.4-1.9c2-1.9,3.2-4.6,3.2-7.6c0-1-0.1-2-0.4-2.9c2.8-0.5,4.8-2.8,4.8-5.7c0-3.2-2.6-5.8-5.8-5.8c-2.7,0-5,1.9-5.6,4.4c-1.2-0.4-2.4-0.7-3.7-0.7c-1.2,0-2.4,0.2-3.5,0.6C20.7,1.8,18.5,0,15.8,0C12.6,0,10,2.6,10,5.8c0,2.8,2,5.2,4.6,5.7c-0.3,0.9-0.4,1.9-0.4,2.9c0,3,1.3,5.8,3.3,7.7c-0.8,0.5-1.6,1.2-2.3,1.8c-1-0.8-2.2-1.2-3.6-1.2c-3.3,0-6,2.7-6,6c0,3.1,2.4,5.7,5.5,5.9c0,0.6,0.1,1.2,0.2,1.8c-2.8,2-3.2,6.3-0.9,9.8c2.3,3.5,6.6,4.8,9.5,2.9c0.7-0.5,1.3-1.1,1.7-1.8c1.1,0.3,2.2,0.4,3.3,0.4c1.1,0,2.3-0.2,3.3-0.4c0.4,0.7,1,1.3,1.7,1.8c2.9,1.9,7.2,0.7,9.5-2.9c2.3-3.5,1.9-7.8-0.9-9.8c0.1-0.6,0.2-1.2,0.2-1.8C41.9,34.4,44.4,31.8,44.4,28.7z M25.9,40.1l-0.1,0c-5.7-2.3-7.9-7.9-5.4-10.2c2.5-2.3,5.4,0.5,5.4,0.5h0c0,0,2.9-2.8,5.4-0.5C33.7,32.2,31.6,37.8,25.9,40.1z",
          scale: "8.0"
        },
  
        "bee": {
          fill: "pink",
          stroke: "rgba(0,0,0,.4)",
          scale: "8",
          d:"M47.3,27c-1.7-4.1-5.2-8.1-9.9-11.1c-1.3-0.8-2.6-1.5-3.9-2.1c0,0,0,0,0-0.1c0-3.5-2.1-6.6-5.2-7.9l2.9-2.9c0.7-0.7,0.7-1.7,0-2.4s-1.7-0.7-2.4,0L25,4.4l-3.9-3.9c-0.7-0.7-1.7-0.7-2.4,0c-0.7,0.7-0.7,1.7,0,2.4l2.9,2.9c-3.1,1.3-5.2,4.4-5.2,7.9c0,0,0,0,0,0.1c-1.3,0.6-2.6,1.3-3.9,2.1c-4.7,3-8.2,7-9.9,11.1C0.9,31.4,3,36.4,7.3,38.2c1.1,0.4,2.2,0.7,3.3,0.7c1.4,0,2.7-0.3,3.8-0.9c1.9,3.2,5.2,5.3,8.8,5.8v4.5c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7v-4.5c3.7-0.5,6.9-2.6,8.8-5.8c1.2,0.6,2.5,0.9,3.8,0.9c1.1,0,2.2-0.2,3.3-0.7C47,36.4,49.1,31.4,47.3,27z M25,8.5c2.4,0,4.4,1.6,5,3.9c-1.3-0.4-2.6-0.6-3.6-0.6l-2.8,0c-1.1,0-2.3,0.2-3.6,0.6C20.6,10.2,22.6,8.5,25,8.5L25,8.5z M25,40.5c-2.1,0-4.1-0.7-5.7-2h11.4C29.1,39.8,27.1,40.5,25,40.5z M31.4,33.6c0.2,0.5,0.5,1,0.8,1.5H17.8c0.3-0.5,0.6-1,0.8-1.5l0.8-1.9h11.2L31.4,33.6z M20.8,28.3l1.4-3.4h5.7l1.4,3.4C29.2,28.3,20.8,28.3,20.8,28.3z M23.6,21.5L25,18l1.4,3.5C26.4,21.5,23.6,21.5,23.6,21.5z M10.6,35.5c-0.7,0-1.4-0.1-2-0.4C6,34,4.7,30.9,5.8,28.3c2.3-5.5,8.2-9.8,12.9-11.9c0.1,0,0.2-0.1,0.2-0.1c1.3-0.5,2.4-0.9,3.4-1l-3,7.2c0,0,0,0,0,0l-2.8,6.8c0,0,0,0,0,0l-1.2,3c-0.3,0.8-0.8,1.4-1.4,1.9c0,0,0,0-0.1,0.1C13.1,35,11.9,35.5,10.6,35.5L10.6,35.5z M41.4,35.1c-0.6,0.3-1.3,0.4-2,0.4c-1.3,0-2.5-0.5-3.4-1.2c0,0,0,0,0,0c-0.6-0.5-1.1-1.2-1.4-1.9l-1.2-3c0,0,0,0,0,0l-2.8-6.8c0,0,0,0,0,0l-3-7.2c1,0.2,2.2,0.5,3.5,1.1c0.1,0,0.1,0.1,0.2,0.1c4.8,2,10.7,6.4,12.9,11.9C45.3,30.9,44,34,41.4,35.1L41.4,35.1z"
        },
  
        "tree": {
          fill: "pink",
          stroke: "rgba(0,0,0,.4)",
          scale: "8.0",
          d:"M45.4,14.9c0-3.8-2.9-6.9-6.5-7.3c-1-2.8-3.7-4.8-6.8-4.8c-1.4,0-2.7,0.4-3.7,1c-1.2-2.2-3.6-3.7-6.4-3.7c-3.6,0-6.6,2.7-7.2,6.1c-0.3,0-0.6-0.1-0.9-0.1c-4,0-7.3,3.3-7.3,7.3c0,0.2,0,0.4,0,0.6c-2,1.3-3.4,3.6-3.4,6.2c0,2.3,1.1,4.3,2.7,5.7c0,0.1,0,0.3,0,0.4c0,4,3.3,7.3,7.3,7.3c1.2,0,2.3-0.3,3.3-0.8c1.4,1,3.4,2.2,4.3,2c0,0,0.4,5.6,0.3,7c-0.1,2.7-1,5.7-1.5,8.1h8.8c0,0-1.3-5.4-1.3-7.2c-0.1-1.8,0.6-5.1,0.6-5.1l3-3.1c1.2,0.8,2.6,1.3,4.1,1.3c3.8,0,6.9-2.9,7.3-6.5c2.8-1,4.8-3.7,4.8-6.8c0-1.9-0.7-3.5-1.8-4.8C45.3,16.7,45.4,15.8,45.4,14.9z M18.2,31.6c0.6-0.6,1.1-1.2,1.4-1.9l1.4,3C21.1,32.7,20.3,33,18.2,31.6z M23.6,33.5c-0.7,0.1-2-2.1-2.9-4c1,0.5,2.1,0.8,3.3,0.8c0.3,0,0.6,0,0.9-0.1C24.7,31.7,24.3,33.3,23.6,33.5z M26.7,34.9c-1.7,0.5-0.7-3.1-0.2-5.1c0.4-0.1,0.7-0.3,1-0.5c0.2,1.5,0.8,2.8,1.8,3.9C28.5,34,27.6,34.7,26.7,34.9z"
        }
      }
      this.state = {
        color: "pink",
        currentShape: this.shapes.butterfly,
        currentBackground: ""
    }
  

    }
    
    

    changeMenuToDisplayNone(){
        let menus = document.getElementsByClassName("menu-change");
        for(let i =0; i<menus.length; i++){
            menus[i].style.display = "none"
        }
    }

    changeButtonToWhiteBackground(){
        let rightBtn =  document.getElementsByClassName('rightBtn')
        for(let i = 0; i < rightBtn.length; i++){
            rightBtn[i].style.backgroundColor = "white";
        }
    }

    changeButtonToGreyBackground(id){
        this.changeButtonToWhiteBackground()
        document.getElementById(id).style.backgroundColor = "#d9d9d9";
    }

    DisplayColorsMenu(){
        this.changeMenuToDisplayNone();
        document.getElementById('menu-colors').style.display= 'block';
    }

    DisplayShapesMenu(){
        this.changeMenuToDisplayNone();
        document.getElementById('menu-shapes').style.display= 'block';
    }

    DisplayBackgroundMenu(){
        this.changeMenuToDisplayNone();
        document.getElementById('menu-background').style.display= 'block';
    }


  changeObjectColor = (color) => {
    this.shapeSvg.attr("fill", color);
   }

   changeShape = (shape) => {
    console.log("change shape on orbit is invoked with shape", shape);
    this.setState({ currentShape: this.shapes[shape] });
    this.shapeSvg.attr("d", this.shapes[shape].d);
    
    
  }
  changeBackground = (backgroundImg) => {
    console.log("background image clicked", backgroundImg);
    let backgroundImage= 'url(' + backgroundImg + ')';
    backgroundcurrent = backgroundImage;
    this.setState(this.state);
  }

   componentDidMount() {
    const svg = d3.select(this.myRef.current);
    console.log("MY REF?!", this.myRef.current);

    this.shapeSvg =
    svg.append("path")
      .attr("stroke", this.state.currentShape.stroke)
      .attr("fill", this.state.color)
      .attr("d", this.state.currentShape.d);
      if(window.matchMedia("(max-width: 1100px)").matches){
        svg.attr("transform","scale(" + 0.6 * this.state.currentShape.scale + "),translate(15,8)")
      }else if(window.matchMedia("(max-width: 800px)").matches){
        svg.attr("transform","scale(" + 0.4 * this.state.currentShape.scale + "),translate(15,8)")
      }else{
        svg.attr("transform","scale(" + this.state.currentShape.scale + "),translate(15,8)")
      }
      
      
      ;
    this.changeMenuToDisplayNone();
    this.changeButtonToWhiteBackground();
   }

    render(){

        return(
            <div id= "gameMenuPage" style = {Object.assign({},{backgroundImage: backgroundcurrent}) }>
                <div className = "menu">
                    <button className = "rightBtn" id = "background-btn" onClick= {()=>{this.changeButtonToGreyBackground('background-btn'); this.DisplayBackgroundMenu()}}><img  src = "picture.png" /><br/><span>תמונה</span></button><br></br>
                    <button className = "rightBtn" id = "shape-btn" onClick= {()=>{this.changeButtonToGreyBackground('shape-btn'); this.DisplayShapesMenu()}}><img src = "rabbit.png"  /><br/><span>צורה</span></button><br></br>
                    <button  className = "rightBtn" id = "color-btn" onClick= {()=>{this.changeButtonToGreyBackground('color-btn'); this.DisplayColorsMenu()}}><img src = "paintbrushPalette.png" /><br/><span>צבע</span></button><br></br>
                </div>
                <div className = "menu-change" id= "menu-colors">
                <Colors changeObjectColor = {this.changeObjectColor}/>
                </div>
                <div className = "menu-change" id = "menu-shapes">
                <Shapes changeShape={this.changeShape}/>
                </div>
                <div className = "menu-change" id = "menu-background">
                    <Background changeBackground = {this.changeBackground}/>
                </div>
                <svg id="gamesvg" y = "200"><g id = "settingsvg"ref={this.myRef} /></svg>
                
                 <NavLink to="/Game"><img id = "start-btn" src = "./Polygon1.png" width = "65px"/></NavLink>
   

               
            </div>  
           
        );
    }
}



export default GameMenu;

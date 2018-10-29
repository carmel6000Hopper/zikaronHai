import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Menu.css';



export class Menu extends Component {
    constructor(props){
        super(props);
    }
    openNav = () => {
        // TODO return that the nav is opened
        console.log("Open Nav");
        console.log("this.props: ", this.props);
        this.props.setNavBarIsOpened();
        document.getElementById("mySidebar").style.width = "100%";
        // document.getElementById("main").style.marginRight = "250px";
    }

    closeNav = () =>  {
        console.log("close Nav");
        // TODO check why this is not working
        this.props.setNavBarIsClosed();
        document.getElementById("mySidebar").style.width = "0";
        // document.getElementById("main").style.marginRight = "0";
    }

    onMenuClick = (pagePath) => {
        this.closeNav();
        this.props.history.push(pagePath);
    }

    render() {
        return (
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            <div>
                <div id="mySidebar" className="sidebar">
                    {/* <button href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>X</button> */}
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                    <a onClick={() => { this.onMenuClick("/camera") }}>הוספת שלט</a>
                    {/* <a onClick={() => { this.closeNav(); this.props.history.push('/sign') }}>Sign</a> */}
                    <a onClick={() => { this.onMenuClick('/upload') }}>upload</a>
                    <a>אודות</a>
                    <a onClick={() => { this.onMenuClick('/gps') }}>מפה</a>
                </div>
                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>
              
            </div>
        );

    }
}

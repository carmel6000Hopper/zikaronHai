import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Menu.css';



export class Menu extends Component {
    constructor(props){
        super(props);
    }

    openNav = () => {
        console.log("Open Nav");
        document.getElementById("mySidebar").style.width = "100%";
    }

    closeNav = () =>  {
        console.log("close Nav");
        document.getElementById("mySidebar").style.width = "0";
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
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                    <a onClick={() => { this.onMenuClick("/") }}>בית</a>
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

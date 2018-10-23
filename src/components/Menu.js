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
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
    }

    closeNav = () =>  {
        console.log("close Nav");
        // TODO check why this is not working
        this.props.setNavBarIsClosed();
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
    }
    render() {
        return (
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            <div>
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                    <a onClick={() => { this.props.history.push('/camera') }}>הוספת שלט</a>
                    <a onClick={() => { this.props.history.push('/uploadHandler') }}>upload</a>
                    <a>אודות</a>
                    <a onClick={() => { this.props.history.push('/gps') }}>מפה</a>
                </div>
                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>
              
            </div>
        );

    }
}

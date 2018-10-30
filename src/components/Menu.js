import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Menu.css';



export class Menu extends Component {
    openNav = () => {
        console.log("Open Nav");
        document.getElementById("mySidebar").style.width = "100%";
    }

    closeNav = () =>  {
        console.log("close Nav");
        document.getElementById("mySidebar").style.width = "0";
    }

    // onMenuClick = (pagePath) => {
    //     this.closeNav();
    //     this.props.history.push(pagePath);
    // }

    render() {
        return (
            <div>
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                    <a href={'/camera'} onClick={this.closeNav}>הוספת שלט</a>
                    {/* <a href={''} onClick={() => { this.onMeuClick('/sign') }}>Sign</a> */}
                    <a href={'/upload'} onClick={this.closeNav}>upload</a>
                    <a>אודות</a>
                    <a href={'/gps'} onClick={this.closeNav}>מפה</a>
                    <a href={'/'} onClick={this.closeNav}>התנתק</a>
                </div>
                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>
              
            </div>
        );

    }
}

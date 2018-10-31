import React, { Component } from 'react';
// import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Menu.css';
import x from '../images/x-button-menu.png'


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
                    {/* <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a> */}
                    <img src={x} href="javascript:void(0)" className="closebtn" onClick={this.closeNav}/>
                   <div className="a-container">
                    <a href={'/camera'} onClick={this.closeNav}>הוספת שלט</a>
                    {/* <a href={''} onClick={() => { this.onMeuClick('/sign') }}>Sign</a> */}
                    <a href={'/upload'} onClick={this.closeNav}>upload</a>
                    <a>אודות</a>
                    <a href={'/gps'} onClick={this.closeNav}>מפה</a>
                    <a href={'/'} onClick={this.closeNav}>התנתק</a>
                    </div>
                </div>
                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>
              
            </div>
        );

    }
}

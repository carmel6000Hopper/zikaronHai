import React, { Component } from 'react';

import { Link, BrowserRouter as Route } from 'react-router-dom';

import AuthUserContext from '../sign/AuthUserContext';
import './Menu.css';
import x from '../images/menu-exit.png'





export class Menu extends Component {
    openNav = () => {
        console.log("Open Nav");
        document.getElementById("mySidebar").style.width = "100%";
    }

    closeNav = () => {
        console.log("close Nav");
        document.getElementById("mySidebar").style.width = "0";
    }
    MenuSignedIn = () =>
        <div id="mySidebar" className="sidebar">
            <img src={x} href="javascript:void(0)" className="closebtn" onClick={this.closeNav} />
            <div className="a-container">
                <a href={'/camera'} onClick={this.closeNav}>הוספת שלט</a>
                <a href={'/upload'} onClick={this.closeNav}>upload</a>
                <a>אודות</a>
                <a href={'/gps'} onClick={this.closeNav}>מפה</a>
                <a href={'/account'} onClick={this.closeNav}>החשבון שלי</a>
                <a href={'/'} onClick={this.closeNav}>התנתק</a>
            </div>
        </div>

    MenuVisitor = () =>
        <div id="mySidebar" className="sidebar">
            <img src={x} href="javascript:void(0)" className="closebtn" onClick={this.closeNav} />
            <div className="a-container">
                <a>אודות</a>
                <a href={'/signin'} onClick={this.closeNav}>כניסה כמשתמש</a>
                <a href={'/gps'} onClick={this.closeNav}>מפה</a>
            </div>
        </div>


    render() {
        return (
            <div>
                <AuthUserContext.Consumer>
                    {authUser => authUser
                        ? <this.MenuSignedIn />
                        : <this.MenuVisitor />
                    }
                </AuthUserContext.Consumer>
                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>

            </div>
        );

    }
}
export default Menu;
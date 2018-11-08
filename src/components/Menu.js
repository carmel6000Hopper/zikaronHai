import React, { Component } from 'react';

import { Link, BrowserRouter as Route } from 'react-router-dom';

import { AuthConsumer } from '../sign/withAuthorization'
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
                <Link to ={'/camera'} onClick={this.closeNav}>הוספת שלט</Link>
                <Link to ={'/upload'} onClick={this.closeNav}>upload</Link>
                <a>אודות</a>
                <Link to ={'/gps'} onClick={this.closeNav}>מפה</Link>
                <Link to ={'/account'} onClick={this.closeNav}>החשבון שלי</Link>
                <Link to ={'/signout'} onClick={this.closeNav}>התנתק</Link>
            </div>
        </div>

    MenuVisitor = () =>
        <div id="mySidebar" className="sidebar">
            <img src={x} href="javascript:void(0)" className="closebtn" onClick={this.closeNav} />
            <div className="a-container">
                <a>אודות</a>
                <Link to={'/signin'} onClick={this.closeNav}>כניסה כמשתמש</Link>
                <Link to={'/gps'} onClick={this.closeNav}>מפה</Link>
            </div>
        </div>


    render() {
        return (
            <div>
                <AuthConsumer>
                    {isAuth => isAuth === true
                        ? <this.MenuSignedIn />
                        : <this.MenuVisitor />
                    }
                </AuthConsumer>
                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>

            </div>
        );

    }
}
export default Menu;
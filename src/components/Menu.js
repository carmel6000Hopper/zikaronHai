import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import menuExitBtn from '../images/menu-exit.png'


export class Menu extends Component {

    constructor(props) {
        super(props);
        this.navRef = React.createRef();
    }

    openNav = () => {
        console.log("Open Nav");
        this.navRef.current.style.width = "100%";
    }

    closeNav = () => {
        console.log("close Nav");
        this.navRef.current.style.width = "0";
    }

    render() {
        return (
            <div>
                <div ref={this.navRef} id="mySidebar" className="sidebar">
                    {/* <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a> */}
                    <a href="javascript:void(0)" onClick={this.closeNav}>
                        <img src={menuExitBtn} className="closebtn" alt="close-btn"/>
                    </a>
                    <div className="a-container">
                        <Link to={'/camera'} onClick={this.closeNav}>הוספת שלט</Link>
                        <Link to={'/upload'} onClick={this.closeNav}>upload</Link>
                        <a>אודות</a>
                        <Link to={'/gps'} onClick={this.closeNav}>מפה</Link>
                        <Link to={'/'} onClick={this.closeNav}>התנתק</Link>
                    </div>
                </div>
                <div id="main">
                    <button className="openbtn" onClick={this.openNav}>☰ זכרון חי</button>
                </div>
            </div>
        );

    }
}

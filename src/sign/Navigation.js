import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Route, } from "react-router-dom";
import AuthUserContext from './AuthUserContext';
import SignOut from './SignOut';


// import css
import './WelcomePage.css'

const NavigationAuth = () =>
    <div className="flex-box-center-container flex-horizontal-center">
        <Link className="link" to="/homepage"><div className="to-home-page">לדף הראשי</div></Link><br />
        <Link className="link" to="/account"><div className="to-account-page">החשבון שלי</div></Link><br />
        <Link className="link" to="/signout"><div className="sign-btn signout">התנתק</div></Link><br />
    </div>

const NavigationNonAuth = () =>
    <div className="flex-box-center-container flex-horizontal-center">
        <Link className="link" to="/signup" ><div className="sign-btn signup">משתמש חדש</div></Link>
        <br />
        <Link className="link" to="/signin"><div className="sign-btn signin">משתמש רשום</div></Link><br />
        <Link className="link" to="/gps"><div className="sign-btn visitor">כניסה כאורח</div></Link><br/>
    </div>


const Navigation = () =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

export default Navigation;

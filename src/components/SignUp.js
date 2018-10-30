import React, { Component } from 'react';
// import { SIGHUP } from 'constants';
// import {WelcomePage} from './components/SignIn.js'
// // import '../styles/App.css';
// import { BrowserRouter as Route, Redirect, Link } from "react-router-dom";
import { Auth } from '../auth/auth.js';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

function checkForLetters(str) {
    let letter;
    for (let i = 0; i < 26; i++) {
        let t = String.fromCharCode(('a').charCodeAt(0) + i);
        if (str.indexOf(t) > -1)
            return true;
    }
    for (let i = 0; i < 26; i++) {
        let t = String.fromCharCode(('A').charCodeAt(0) + i);
        if (str.indexOf(t) > -1)
            return true;
    }
    for (let i = 0; i < 26; i++) {
        let t = String.fromCharCode(('א').charCodeAt(0) + i);
        if (str.indexOf(t) > -1)
            return true;
    }
    return false;
}

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            passconfirm: '',
            nickname: '',
            firstNameErrorMsg: '',
            lastNameErrorMsg: '',
            passErrorMsg: '',
            passconfirmErrorMsg: '',
            // nicknameErrorMsg: '',
            waitingForSignup: false,
            signedUp: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderButtonOrWheel = this.renderButtonOrWheel.bind(this);
    }

    handleChange(event) {
        if (event.target.id === "email")
            this.setState({ email: event.target.value });
            if (event.target.id === "first-name") {
                this.setState({ firstName: event.target.value });
                if (!checkForLetters(event.target.value))
                    this.setState({ firstNameErrorMsg: 'על השם להכיל אותיות' });
                else if (this.state.firstNameErrorMsg.length !== 0)
                    this.setState({ firstNameErrorMsg: '' });
            }
        
        if (event.target.id === "last-name") {
            this.setState({ lastName: event.target.value });
            if (!checkForLetters(event.target.value))
                this.setState({ lastNameErrorMsg: 'על השם להכיל אותיות' });
            else if (this.state.lastNameErrorMsg.length !== 0)
                this.setState({ lastNameErrorMsg: '' });
        }
        if (event.target.id === "pass") {
            this.setState({ pass: event.target.value });
            if (event.target.value.length < 6)
                this.setState({ passErrorMsg: 'סיסמה קצרה מידי' });
            else if (this.state.passErrorMsg.length !== 0)
                this.setState({ passErrorMsg: '' });
        }
        if (event.target.id === "passconfirm") {
            this.setState({ passconfirm: event.target.value });
            if (event.target.value !== this.state.pass)
                this.setState({ passconfirmErrorMsg: 'סיסמה לא תואמת' });
            else if (this.state.passconfirmErrorMsg.length !== 0)
                this.setState({ passconfirmErrorMsg: '' });
        }
        if (event.target.id === "nickname")
        this.setState({ nickname: event.target.value });
    
    }
//         if (event.target.id === "firstName") {
//             this.setState({ firstName: event.target.value });
//             if (!checkForLetters(event.target.value))
//                 this.setState({ firstNameErrorMsg: 'על השם להכיל אותיות' });
//             else if (this.state.firstNameErrorMsg.length !== 0)
//                 this.setState({ firstNameErrorMsg: '' });
//         }
    
//     if (event.target.id === "lastName") {
//         this.setState({ lastName: event.target.value });
//         if (!checkForLetters(event.target.value))
//             this.setState({ lastNameErrorMsg: 'על השם להכיל אותיות' });
//         else if (this.state.lastNameErrorMsg.length !== 0)
//             this.setState({ lastNameErrorMsg: '' });
//     }
// }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.firstNameErrorMsg || this.state.lastNameErrorMsg || this.state.passErrorMsg || this.state.passconfirmErrorMsg) {
            return (<div>somthing wrong</div>);
        }
        else {
            this.setState({ waitingForSignup: true });
            console.log(this.state.email, this.state.pass);
            Auth.AuthSignup(this.state.email, this.state.pass, this.onSignup.bind(this));
        }
    }

    onSignup(hasSignedUp) {
        if (hasSignedUp) {
            this.setState({ signedUp: hasSignedUp, waitingForSignup: false });
            this.props.rerenderAppComp();
        }
        else {
            this.setState({ waitingForSignup: false });
        }
    }

    renderButtonOrWheel() {
        if (!this.state.waitingForSignup)
            return <button className="blue-button Subtitle-1-grey" type="submit">הרשמה</button>;
        else
            return <div>babababba</div>;
    }

    render() {
        if (this.state.signedUp) {
            console.log("should re-direct")
            return (<Redirect to='/' />);
        }

        return (
            <div className="flex-box-center-container flex-horizontal-center">
                <div className="ib signup-container">
                    <h1 className="tac ib">הרשמה</h1>
                    <div className="row"><p className="Subtitle-1 inline">משתמש רשום? </p>
                        <Link className="Subtitle-1 underline" to="/login">כניסה לחשבון שלי</Link></div><br />
                    <form onSubmit={this.handleSubmit}>
                        {/* first name input */}
                        <div className="row">
                            <input id="first-name" type="text" placeholder="שם פרטי" value={this.state.firstName} onChange={this.handleChange} required="required" />
                            <p className="error-text">{this.state.firstNameErrorMsg}</p>
                        </div>
                        {/* last name input */}
                        <div className="row">
                            <input id="last-name" type="text" placeholder="שם משפחה" value={this.state.lastName} onChange={this.handleChange} required="required" />
                            <p className="error-text">{this.state.lastNameErrorMsg}</p>
                        </div>
                        {/* email input */}
                        <div className="row">
                            <input id="email" type="email" placeholder="כתובת אימייל" value={this.state.email} onChange={this.handleChange} required="required" />
                            <p className="error-text">{''}</p>
                        </div>
                        {/* password input */}
                        <div className="row">
                            <input id="pass" type="password" value={this.state.pass} onChange={this.handleChange} placeholder="סיסמה" required="required" />
                            <p className="error-text">{this.state.passErrorMsg}</p>
                        </div>
                        {/* confirm password input */}
                        <div className="row">
                            <input id="passconfirm" type="password" value={this.state.passconfirm} onChange={this.handleChange} placeholder="אימות סיסמה" required="required" />
                            <p className="error-text">{this.state.passconfirmErrorMsg}</p>
                        </div>
                        {/* nickname input */}
                        <div className="row">
                            <input id="nickname" type="text" placeholder="כינוי" value={this.state.nickname} onChange={this.handleChange} required="required" />
                            {/* <p className="error-text">{this.state.nicknameErrorMsg}</p> */}
                        </div>
                        <div className="row">
                            {this.renderButtonOrWheel()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
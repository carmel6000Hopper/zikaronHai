import React, { Component } from 'react';
// import { SIGHUP } from 'constants';
// import {WelcomePage} from './components/SignIn.js'
// // import '../styles/App.css';
// import { BrowserRouter as Route, Redirect, Link } from "react-router-dom";
import { Auth } from '../auth/auth.js';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

// export class SignUp extends Component {
//     render(){
//         return <h1>sigh Up</h1>
//     }
// }

// export default SignUp;
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
            name: '',
            email: '',
            pass: '',
            passconfirm: '',
            nameErrorMsg: '',
            passErrorMsg: '',
            passconfirmErrorMsg: '',
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
        if (event.target.id === "name") {
            this.setState({ name: event.target.value });
            if (!checkForLetters(event.target.value))
                this.setState({ nameErrorMsg: 'על השם להכיל אותיות' });
            else if (this.state.nameErrorMsg.length !== 0)
                this.setState({ nameErrorMsg: '' });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.nameErrorMsg || this.state.passErrorMsg || this.state.passconfirmErrorMsg) {
            return;
        }
        else {
            this.setState({ waitingForSignup: true });
            console.log(this.state.email, this.state.pass, this.state.name);
            Auth.AuthSignup(this.state.email, this.state.pass, this.state.name, this.onSignup.bind(this));
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
            return <button className="blue-button Subtitle-1-grey" type="submit">!צרפו אותי לא ללאברדור</button>;
        else
            return <div>babababba</div>;
    }

    render() {
        if (this.state.signedUp) {
            console.log("should re-direct")
            return (<Redirect to='/home' />);
        }

        return (
            <div className="flex-box-center-container flex-horizontal-center">
                <div className="ib signup-container">
                    <h1 className="tac ib">הרשמה</h1>
                    <div className="row"><p className="Subtitle-1 inline">משתמש רשום? </p>
                        <Link className="Subtitle-1 underline" to="/login">כניסה לחשבון שלי</Link></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <input id="name" type="text" placeholder="שם פרטי" value={this.state.name} onChange={this.handleChange} required="required" />
                            <p className="error-text">{this.state.nameErrorMsg}</p>
                        </div>
                        <div className="row">
                            <input id="email" type="email" placeholder="כתובת אימייל" value={this.state.email} onChange={this.handleChange} required="required" />
                            <p className="error-text">{''}</p>
                        </div>
                        <div className="row">
                            <input id="pass" type="password" value={this.state.pass} onChange={this.handleChange} placeholder="סיסמה" required="required" />
                            <p className="error-text">{this.state.passErrorMsg}</p>
                        </div>
                        <div className="row">
                            <input id="passconfirm" type="password" value={this.state.passconfirm} onChange={this.handleChange} placeholder="אימות סיסמה" required="required" />
                            <p className="error-text">{this.state.passconfirmErrorMsg}</p>
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
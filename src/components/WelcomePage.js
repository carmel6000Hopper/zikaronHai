import React, { Component } from 'react';
// import { SignIn } from './components/SignIn.js';
import { BrowserRouter as Route,  } from "react-router-dom";
// import '../styles/WelcomeTeacher.css';
import './WelcomePage.css'
import { Link } from 'react-router-dom';


export class WelcomePage extends Component {
    constructor(props) {
        super(props);//runs the constructor of "my father"
        this.state = {
            pin: undefined,
            email: undefined,
            emailPass: undefined,
            pass: undefined,
            start: false,
        };

    }
 
    render() {
        return (         
            <div className="flex-box-center-container flex-horizontal-center">
                <div className="welcome-container ib">
                    <h2 id="welcome">זכרון חי</h2>
                    <p id="welcome_desc">מתעדים את שלטי המורשת</p>
                    {/* <button onClick={() => {this.props.history.push('/signin')}}>SignIn</button> */}
                    {/* <button onClick={() => { this.props.history.push('/login') }}>LogIn</button> */}
                    {/* <button>LogIn</button> */}
                    <br/>
                    <Link className="link" to="/signup" ><div className="sign-btn signup">משתמש חדש</div></Link>
                    <br/>
                    <Link className="link" to="/login"><div className="sign-btn login">משתמש רשום</div></Link><br/>
                    <div><Link className="link guest" to="/camera">כניסה כאורח</Link></div>
                </div>
            </div>  
        );
    }
}

export default WelcomePage;
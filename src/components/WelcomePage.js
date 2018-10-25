import React, { Component } from 'react';
// import { SignIn } from './components/SignIn.js';
// import { BrowserRouter as Route,  } from "react-router-dom";
// import '../styles/WelcomeTeacher.css';

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

    componentWillMount() {
        document.body.style.backgroundColor = "#5f8f8f";
        //document.body.style.background = "linear-gradient(238deg, #7c30fe, #9862ff)";
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = "#ffffff";
    }
    render() {
        return (         
            <div className="flex-box-center-container flex-horizontal-center">
                <div className="welcome-container ib">
                    <h1 id="welcome">ברוכים הבאים לא ללאברדור!</h1>
                    <p id="welcome_desc">בלי תוצאות ניסויי מעבדה משותפים לכולם בזמן אמת, עכשיו לא אצלך בכיתה</p>
                    {/* <button onClick={()  => {this.props.history.push('/signin')}}>SignIn</button> */}
                    {/* <button onClick={() => { this.props.history.push('/login') }}>LogIn</button> */}
                    {/* <button>LogIn</button> */}
                    <br/>
                    <div className="row tac"><Link to="/signup" >sign up </Link></div>
                    <br/>
                    <div className="row tac"><Link to="/login">log in</Link></div>
                </div>
            </div>
        );
    }
}

export default WelcomePage;
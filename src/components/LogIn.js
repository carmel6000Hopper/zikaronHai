// import { SIGHUP } from 'constants';
// import {WelcomePage} from './components/SignIn.js'
// // import '../styles/App.css';
// import { BrowserRouter as Route, Redirect, Link } from "react-router-dom";
// import Auth from '../services/auth';
import React, { Component } from 'react';
import {Link, Redirect } from "react-router-dom";
// import { BrowserRouter as Route,Link, Redirect } from "react-router-dom";
import { Auth } from '../auth/auth.js';
import './Login-Signup.css';
// import TeacherForgotPass from './TeacherForgotPass';

export class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:'',
            waitingForLogin: false,
            loggedIn: false,
            forgotPassShowing: false
        };
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePassChange=this.handlePassChange.bind(this);
        this.forgotPassModal = this.forgotPassModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.openForgotPassModal = this.openForgotPassModal.bind(this);
        this.closeForgotPassModal = this.closeForgotPassModal.bind(this);
        this.renderButtonOrWheel = this.renderButtonOrWheel.bind(this);
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    
    handlePassChange(event){
        this.setState({pass: event.target.value});
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.setState({waitingForLogin:true})
        Auth.AuthLogin(this.state.email, this.state.pass, this.onLogin.bind(this));
    }

    onLogin(hasLoggedIn)
    {
        if(hasLoggedIn){
            this.setState({loggedIn: hasLoggedIn, waitingForLogin:false});
            this.props.rerenderAppComp();
        }
        else{
            this.setState({waitingForLogin:false});
        }
    }
    
    forgotPassModal(){
        if(this.state.forgotPassShowing)
            // return <TeacherForgotPass onClose={this.closeForgotPassModal}/>;
            return <h1>vdv</h1>
    }
    openForgotPassModal(){
        this.setState({forgotPassShowing:true});
    }
    closeForgotPassModal(){
        this.setState({forgotPassShowing:false});
    }

    componentWillMount(){
        document.body.style.backgroundColor = "#f2f2f2";
         
        }

    renderButtonOrWheel(){
        if(!this.state.waitingForLogin)
            return <button className="submit-btn" type="submit">כניסה</button>;
        else
            return <div>cmcmds</div>;

    }
    render()
    {
        if(this.state.loggedIn)
        {
            console.log("should re-direct");
            return(<Redirect to='/'/>);
        }

        return(
            <div className="body-container flex-box-center-container flex-horizontal-center">
            <div className="ib">
                <h2 className="h2-center">כניסה</h2>
                <div className="row"><p className="Subtitle-1 inline">עוד לא נרשמת? </p>
                <Link className="Subtitle-1 underline" to="/signup">הרשמה</Link></div><br/>
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="row"><input className="input" id = "email" type="text" placeholder="כתובת אימייל" value={this.state.email} onChange={this.handleEmailChange} required="required"/></div>
                    <br/>
                    <div className="row"><input className="input" id = "pass" type="password" placeholder="סיסמה" value={this.state.pass} onChange={this.handlePassChange} required="required" /></div>
                    <div className="row">
                        <div className="col">
                            <button  type="button" className="small-text  underline left" onClick={this.openForgotPassModal}>שכחתי סיסמה</button>
                        </div>
                    </div>
                    <div className="row">{this.renderButtonOrWheel()}</div>
                </form>
                {this.forgotPassModal()}
            </div>
            </div>
        );
    }
}

export default LogIn;
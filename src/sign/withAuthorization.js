// import React from 'react';
// import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import {auth, firebase } from '../firebase';
import { Route, Redirect } from 'react-router-dom'
// const withAuthorization = (authCondition) => (Component) => {
//   class WithAuthorization extends React.Component {
//     componentDidMount() {
//       firebase.auth.onAuthStateChanged(authUser => {
//         if (!authCondition(authUser)) {
//           console.log("in if (!authCondition(authUser))" );
//           this.props.history.push('./signin');
//         }
//       });
//     }

//     render() {
//       return (
//         <AuthUserContext.Consumer>
//           {authUser => authUser ? <Component {...this.props} /> : null}
//         </AuthUserContext.Consumer>
//       );
//     }
//   }

//   return withRouter(WithAuthorization);
// }

// export default withAuthorization;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )

import React from 'react'



class AuthProvider extends React.Component {
  state = { isAuth: false }

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    console.log("this.props.history");
    console.log(this.props.history);
    firebase.auth().onAuthStateChanged(authUser => {
      if (!authCondition(authUser)) {
        console.log("in if (!authCondition(authUser))");
       // this.props.history.push('./signin');
      }
    });
  }
  login(email, pass) {
    //login();
    //event.preventDefault();
    //this.setState({ waitingForSignIn: true })
    auth.doSignInWithEmailAndPassword(email, pass)
        .then(authUser => {
            // history.push(routes.HOME);
            console.log("do sign in")
            console.log(authUser)
           
        })
        .catch(error => {
          console.log(error);
           // this.setState({ errorMessage: error });
        });
    //Auth.AuthSignIn(this.state.email, this.state.pass, this.onSignIn.bind(this));

    console.log ("in login")
    this.setState({ isAuth: true });
    //this.props.history.push('/camera');
    //<Redirect to='/camera'/>;
  }

  logout() {
    console.log ("in logout")
    this.setState({ isAuth: false });
    auth.doSignOut();
    
    //this.props.history.push('./signin');
  }

  render() {
    return (
      <AuthUserContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthUserContext.Provider>
    )
  }
}

const authCondition = (authUser) => !!authUser;
const AuthConsumer = AuthUserContext.Consumer

export { AuthProvider, AuthConsumer }

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './withAuthorization'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
        <div>
        <h1>isAuth : {isAuth}</h1>
      <Route
        render={props =>
          isAuth ? <Component {...props} /> : <Redirect to="/signin" />
        }
        {...rest}
      />
      </div>
    )}
  </AuthConsumer>
)

export default ProtectedRoute

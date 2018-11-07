import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import { AuthConsumer } from './withAuthorization';
const AccountPage = () =>
  <AuthConsumer>
        {({ isAuth, login, logout }) => (
          <div >{isAuth ? ( <div>
            <PasswordForgetForm />
            <PasswordChangeForm />
          </div>) : null} </div>
        )}
  </AuthConsumer>

//const authCondition = (authUser) => !!authUser;

//export default withAuthorization(authCondition)(AccountPage);
export default AccountPage;
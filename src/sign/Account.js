import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import { AuthConsumer } from './withAuthorization';
const AccountPage = () =>
  <AuthConsumer>
        {({ isAuth, login, logout }) => (
          <div >{isAuth ? ( <div>
            <PasswordChangeForm />
            <PasswordForgetForm />
          </div>) : null} </div>
        )}
  </AuthConsumer>

export default AccountPage;
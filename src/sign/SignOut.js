
import React, { Component } from 'react';

import { auth } from '../firebase';

export class SignOut extends Component {
    render() {
        return (
            <button
                type="button"
                onClick={auth.doSignOut} >
                Sign Out
        </button>
        );
    }
}

export default SignOut;
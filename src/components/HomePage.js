import React from 'react';

import withAuthorization from './withAuthorization';

const WelcomeMessage = () =>
    <div className="welcome-container ib">
        <h2 id="welcome">זכרון חי</h2>
        <p id="welcome_desc">מתעדים את שלטי המורשת</p>
    </div>

    
const HomePage = () =>
    <WelcomeMessage />

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
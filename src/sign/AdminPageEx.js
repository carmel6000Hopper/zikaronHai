import React from 'react';

import AuthUserContext from './AuthUserContext';

const AdminPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Admin</h1>
        <p>Restricted area! Only users with the admin rule are authorized.</p>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser && authUser.role === 'ADMIN';

export default withAuthorization(authCondition)(AdminPage);

// ...

// class HomePage extends Component {
//   ...

//   render() {
//     const { users } = this.state;

//     return (
//       <div>
//         <h1>Home</h1>
//         <p>The Home Page is accessible by every signed in user.</p>

//         { !!users && <UserList users={users} /> }
//       </div>
//     );
//   }
// }

// const UserList = ({ users }) =>
//   <div>
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key =>
//       <div key={key}>{users[key].username}</div>
//     )}
//   </div>

// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(HomePage);
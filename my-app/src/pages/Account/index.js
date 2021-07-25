import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  }
  return (
    <div className="container">
      <h1>Account page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Account;

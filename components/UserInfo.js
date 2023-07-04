import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      {/* Display additional user information as needed */}
    </div>
  );
};

export default UserInfo;

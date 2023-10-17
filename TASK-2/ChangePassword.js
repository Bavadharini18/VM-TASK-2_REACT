import React, { useState } from 'react';
import "./ChangePassword.css";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    // Here, you can implement your password change logic, such as making an API request.

    setMessage("Password changed successfully.");
  };

  return (
    <>
    <div className='password'>
      <form onSubmit={(e) => { e.preventDefault(); changePassword(); }}>
        <p className='head'>Change Password</p>
        <div className="Change-Password">
          <div className='change'><label htmlFor="currentPassword">Current Password </label><br/>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          placeholder='Enter current password'
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        /><br /></div>

        <div className='new'><label htmlFor="newPassword">New Password </label><br/>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          placeholder='Enter new password'
          onChange={(e) => setNewPassword(e.target.value)}
          required
        /><br /></div>   
        <div className='confirm'>
        <label htmlFor="confirmPassword">Confirm Password </label><br/>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          placeholder='Confirm new password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        </div>
        </div>
        <div className='submit1'>
        <button type="submit"className='submit'>Change Password</button>
        <div id="message">{message}</div>
          </div>        
      </form>
      </div>
    </>
  );
}

export default ChangePassword;

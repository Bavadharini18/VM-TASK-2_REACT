import React, { useState } from "react";
import './Security.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Security = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    // Implement your password change logic, such as making an API request.

    setMessage("Password changed successfully.");
  };

  return (
    <div className="row">
      <div className="cl-4 sidebar">
        nav
      </div>
      <div className="cl-7 content">
        <p className="font1">Security</p>
        <div className="main-container1">
          <div className="payment-section1">
            <p className="head1">2-factor Authentication</p>
            <div className="detail-box">
              <div className="num">
                <label htmlFor="newPassword">Phone number</label><br />
                <input
                  type="text"
                  id="number"
                  placeholder='9876543210'
                  required
                />
              </div>
    <Stack className="button" direction="row">
      <Button variant="contained">Turn On</Button>
    </Stack>
            </div>
          </div>
          <div className='password'>
            <form onSubmit={(e) => { e.preventDefault(); changePassword(); }}>
              <p className='head'>Change Password</p>
              <div className="Change-Password">
                <div className='change'>
                  <label htmlFor="currentPassword">Current Password</label><br />
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    placeholder='Enter current password'
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  /><br />
                </div>

                <div className='new'>
                  <label htmlFor="newPassword">New Password</label><br />
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    placeholder='Enter new password'
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  /><br />
                </div>
                <div className='confirm'>
                  <label htmlFor="confirmPassword">Confirm Password</label><br />
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
                <button type="submit" className='submit'>Change Password</button>
                <div id="message">{message}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;

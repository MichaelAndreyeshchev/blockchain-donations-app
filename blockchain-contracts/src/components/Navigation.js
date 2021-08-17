import React, { useState } from 'react';
import NavCSS from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';

const style = {
  borderRadius: 30,
  border: 0,
  color: 'black',
  height: 48,
  padding: '14px 30px',
  background: '#b1d9e0',
};

const Navigation = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav>
      <ul className="campaign__navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teampage">Team</Link>
        </li>
        <li>
          <Link to="/specificdonation">Donations</Link>
        </li>
        <li>
          <Link to="/donationlisst">Donation List</Link>
        </li>
        <li>
          <Link to="/accountinfo">AccountInfo</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portalpage">Portal</Link>
        </li>
        <li>
          <Link to="/CreateCampaign">CreateCampaign</Link>
        </li>
        <li style={{ float: 'right' }}>
            {isAuthenticated && (
            <div className="profile__image">
                <img src={user.picture} alt={user.name} />
            </div>
        )}
        </li>
        <li style={{ float: 'right' }}>
          {!isAuthenticated && (
            <Button style={style} className="login" onClick={() => loginWithRedirect()}>Login</Button>
          )}
        </li>

        <li style={{ float: 'right' }}>
          {isAuthenticated && (
            <Button className="logout" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;

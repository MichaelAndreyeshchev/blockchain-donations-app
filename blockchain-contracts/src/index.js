import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
    domain="cryptonate.us.auth0.com"
    clientId="lR9D8s7bwWwCJKcw3X1fhsnGaBtjTGw2"
    redirectUri={'https://localhost:3000/portalpage'}>
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

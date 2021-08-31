import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

window.React1 = require('react');
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const express = require('express');
const app = express();
const port = 3000;

const user_model = require('./user_model');

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.post('/portalpage', (req, res) => {
    user_model.createUser(req.body);
    console.log('Hello World!');
})
  
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
    domain="dev-171e4f0g.us.auth0.com"
    clientId="gxIfEyKEM7I8Iiysy5bsoDuRr7ZGw7b2"
    redirectUri={'http://localhost:3000/portalpage'}>
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

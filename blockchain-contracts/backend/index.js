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
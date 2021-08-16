var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to database
var config = {
  server: 'cryptonate.database.windows.net:1433',
  authentication: {
      type: 'default',
      options: {
          userName: 'Cryptonate@cryptonate', // update me
          password: '666dcd94-efce-11eb-9a03-0242ac130003' // update me
      }
  },
  options: {
      database: 'Cryptonate_db'
  }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
console.log("HELLO WORLD!")
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});
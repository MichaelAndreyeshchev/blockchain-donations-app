const { Connection, Request } = require('tedious');

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: 'Cryptonate@cryptonate', // update me
      password: '666dcd94-efce-11eb-9a03-0242ac130003', // update me
    },
    type: 'default',
  },
  server: 'cryptonate.database.windows.net',
  options: {
    database: 'Cryptonate_db',
    encrypt: true,
    port: 1433,
  },
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
    queryDatabase();
  }
});
connection.connect();

function queryDatabase() {
  console.log('Reading rows from the Table...');

  // Read all rows from table
  const request = new Request(
    `SELECT * FROM discussion_board_info`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on('row', (columns) => {
    columns.forEach((column) => {
      console.log('%s\t%s', column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}

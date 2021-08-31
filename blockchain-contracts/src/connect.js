const sql = require('mssql');
console.log("Hello");
sql.connect('Server=cryptonate.database.windows.net,1433;Database=Cryptonate_db;User Id=Cryptonate@cryptonate;Password=666dcd94-efce-11eb-9a03-0242ac130003;Encrypt=true');
console.log("Connected!");
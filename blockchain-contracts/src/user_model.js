const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cryptonate_database',
  password: 'laser101',
});

const createUser = (body) => {
      const { user_name, password } = body
      pool.query(`INSERT INTO user_info (user_name, password) VALUES (${user_name}, ${password}) RETURNING *`);
      console.log("DONEEE!");
}

module.exports = {
    createUser,
}
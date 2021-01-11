const connection = require("./connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll(tableInput, burgerCallback) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      burgerCallback(result);
    });
  },

  insertOne(table, vals, burgerCallback) {
    let queryString = `INSERT INTO ${table} (burger_name) VALUES (?)`;

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      burgerCallback(result);
    });
  },

  updateOne(table, objColVals, burgerCallback) {
    let queryString = `UPDATE ${table} SET ? WHERE ?`;

    console.log(queryString);
    connection.query(queryString, objColVals, (err, result) => {
      if (err) {
        throw err;
      }

      burgerCallback(result);
    });
  },
};

// Export the orm object for the model (burger.js)
module.exports = orm;

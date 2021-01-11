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

  // insertOne()
  // updateOne()
};

// Export the orm object for the model (burger.js)
module.exports = orm;

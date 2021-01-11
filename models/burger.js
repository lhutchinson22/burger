// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll(burgerCallback) {
    orm.selectAll("burgers", (res) => burgerCallback(res));
  },
  // The variables  vals are arrays.
  insertOne(vals, burgerCallback) {
    orm.insertOne("burgers", vals, (res) => burgerCallback(res));
  },

  //   devour(objColVals, condition, cb) {
  //     orm.devour("burgers", objColVals, condition, (res) => cb(res));
  //   },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;

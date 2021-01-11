// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll(burgerCallback) {
    orm.selectAll("burgers", (res) => burgerCallback(res));
  },
  //   // The variables cols and vals are arrays.
  //   create(cols, vals, cb) {
  //     orm.create("burgers", cols, vals, (res) => cb(res));
  //   },

  //   devour(objColVals, condition, cb) {
  //     orm.devour("burgers", objColVals, condition, (res) => cb(res));
  //   },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;

// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  //selecting all burgers
  selectAll(burgerCallback) {
    orm.selectAll("burgers", (res) => burgerCallback(res));
  },
  //inserting new burger
  insertOne(vals, burgerCallback) {
    orm.insertOne("burgers", vals, (res) => burgerCallback(res));
  },
  // changing burger to devoured
  updateOne(objColVals, condition, burgerCallback) {
    orm.updateOne("burgers", objColVals, condition, (res) =>
      burgerCallback(res)
    );
  },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;

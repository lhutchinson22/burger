const express = require("express");

//Create the router for the app, and export the router at the end of your file.
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log("hbsObject", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne([req.body.burger_name], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Export routes for server.js to use.
module.exports = router;

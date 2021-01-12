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

//route to insert burget into the table
router.post("/api/burgers", (req, res) => {
  burger.insertOne([req.body.burger_name], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//route to update the database
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;

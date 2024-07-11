const express = require("express");
const { Contact } = require("../models/ContactModel");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message:"Contact router activated!"
    });
});

// GET localhost:3001/contacts/all
router.get("/all", async (request, response) => {
    let results = await Contact.find().exec();
    console.log("Found documents:");
    console.log(results)


    response.json({
        message:"Found documents!",
        data: results
    });
});

// GET localhost:3001/contacts/1234 (id)
router.get("/:id", (request, response) => {

});


// POST localhost:3001/contacts
router.post("/", (request, response) => {

});

// PATCH localhost:3001/contacts/1234 - use PATCH to access specifics rather than PUT which replaces all data.
router.patch("/:id", (request, response) => {

});

// DELETE localhost:3001/contacts/1234 - will delete based on id
router.delete("/:id", (request, response) => {

});

module.exports = router;
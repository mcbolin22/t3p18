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
// VERB ip:port/controller/:id
router.get("/:id", async (request, response) => {
    let results = await Contact.findById(request.params.id).exec();
    console.log("Found documents:");
    console.log(results)
    response.json({
        message:"Found documents!",
        data: results
    });
});


// POST localhost:3001/contacts
router.post("/", async (request, response) => {
    let results = await Contact.create(request.body);
    console.log("Created documents:");
    console.log(results)
    response.json({
        message:"Created documents!",
        data: results
    });
});

// PATCH localhost:3001/contacts/1234 - use PATCH to access specifics rather than PUT which replaces all data.
router.patch("/:id", (request, response) => {

});

// DELETE localhost:3001/contacts/1234 - will delete based on id
router.delete("/:id", (request, response) => {

});

module.exports = router;
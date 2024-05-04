const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get All Contacts."});
});

const createContact = asyncHandler(async (req, res) => {
    console.log("The Request Body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are Mandatory !");
    }
    res.status(201).json({message: "Create Contact."});
});

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get Contact For ${req.params.id}.`});
});

const updateContact = asyncHandler(async (req, res) => (req, res) => {
    res.status(200).json({message: `Update Contact For ${req.params.id}.`});
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Contact For ${req.params.id}.`});
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact  };
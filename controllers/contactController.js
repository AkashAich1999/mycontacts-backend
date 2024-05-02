const getContacts = (req, res) => {
    res.status(200).json({message: "Get All Contacts."});
}

const createContact = (req, res) => {
    res.status(201).json({message: "Create Contact."});
}

const getContact = (req, res) => {
    res.status(200).json({message: `Get Contact For ${req.params.id}.`});
}

const updateContact = (req, res) => (req, res) => {
    res.status(200).json({message: `Update Contact For ${req.params.id}.`});
}

const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete Contact For ${req.params.id}.`});
}

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact  };
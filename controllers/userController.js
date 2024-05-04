const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req,res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        
    }
    res.json({ message: "Register The User" });
});

const loginUser = asyncHandler(async (req,res) => {
    res.json({ message: "Login User" });
});

const currentUser = asyncHandler(async (req,res) => {
    res.json({ message: "Current User Information" });
});

module.exports = { registerUser, loginUser, currentUser };
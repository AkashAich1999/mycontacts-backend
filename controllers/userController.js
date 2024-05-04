const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req,res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All Fields are Mandaatory.")
    }

    const userAvailable = await User.findOne({ email });
    console.log(userAvailable);
    if(userAvailable){
        res.status(400);
        throw new Error("All Already Registered.")        
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if (user) {
       res.status(201).json({ _id:user.id, email:user.email });
    } else {
       res.status(400);
       throw new Error("User Data is Not Valid");      
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
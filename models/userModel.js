const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please Add The User Name"],
    },
    email:{
        type:String,
        required: [true, "Please Add The User Email Address"],
        unique: [true, "Email Address Already Taken"],
    },
    password:{
        type:String,
        required: [true, "Please Add The User Password"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    otp  : {
        type : Number , 
        required: false
    }
}, 
{
    timestamps: true,
    versionkey: false
});

const UserModel = mongoose.model("userDetails", userSchema);

module.exports = {
    UserModel
};
//creating a scheme

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max:50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
        
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "user"
    },

},{timeStamps:true})



const User = mongoose.model('User', userSchema);

export default  User;
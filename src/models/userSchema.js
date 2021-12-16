const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    availableDate: {
        type: String,
        required: true
    },
    availableTime: {
        type: String,
        Required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
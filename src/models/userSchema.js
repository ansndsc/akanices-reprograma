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
    educationLevel: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
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
        //select: false
    },
    availableDate: {
        type: String,
        required: true
    },
    availableTime: {
        type: String,
        required: true
    },
    socialMedia: {
        type: String,
        required: true,
        lowercase: true
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
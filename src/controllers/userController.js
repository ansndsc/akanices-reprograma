const UserSchema = require('../models/userSchema');

const getUsers = async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const signUp = async (req, res) => {
    try {
        const user = await UserSchema.create(req.body);

        return res.status(201).send({ user });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const update = async (req, res) => {

};

const remove = async (req, res) => {

};

module.exports = {
    getUsers,
    signUp,
    update,
    remove
};
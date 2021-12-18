const mongoose = require('mongoose');
const UserSchema = require('../models/userSchema');

const search = async (req, res) => {
    try {
        
        const foundUser = await UserSchema.find({ availableDate: new RegExp(req.query.availableDate,"i") });

        if(!foundUser) {
            res.status(404).send({ message: `Não temos usuários com esse dia disponível.`});
        }

        res.status(200).json(foundUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const signUp = async (req, res) => {
    try {
        
        const user = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            availableDate: req.body.availableDate,
            availableTime: req.body.availableTime,
            socialMedia: req.body.socialMedia,
            _id: new mongoose.Types.ObjectId()
        });

        const savedUser = await user.save();

        res.status(201).json({ User: savedUser });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const update = async (req, res) => {
    
    try {
        
        const foundId = await UserSchema.findById(req.params.id);
        
        if (!foundId) {
            res.status(404).json({ message: `ID não encontrado.` });
         
        }

        foundId.name = req.body.name || foundId.name
        foundId.email = req.body.email || foundId.email
        foundId.password = req.body.password || foundId.password
        foundId.avalilableDate = req.body.avalilableDate || foundId.avalilableDate
        foundId.availableTime = req.body.availableTime || foundId.availableTime
        foundId.socialMedia = req.body.socialMedia || foundId.socialMedia
       
        const savedUser = await foundId.save();
       
        res.status(200).json(savedUser);


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
};

const remove = async (req, res) => {
    try {
        const foundId = await UserSchema.findById(req.params.id);
        
        await foundId.delete();
        
        if(!foundId) {
            res.status(404).send({ message: `Usuário não encontrado.`});
        }

        res.status(200).json({ message: `User deletado com sucesso.`});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getUsers: search,
    signUp,
    update,
    remove
};
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
    
    try {
        const foundEmail = await req.params.email;
        if (foundEmail) {
            /*
            //                  valor que quero mudar  ou  valor que já existe
            musicaEncontrada.artista = req.body.artista || musicaEncontrada.artista
            musicaEncontrada.album = req.body.album || musicaEncontrada.album
            musicaEncontrada.ano = req.body.ano || musicaEncontrada.ano
            musicaEncontrada.titulo = req.body.titulo || musicaEncontrada.titulo

            const musicaSalva = await musicaEncontrada.save()
            */
            res.status(200).json(foundEmail);
        }

        res.status(400).json({
            mensagem: "Descupa, mas não conseguimos encontrar essa musica"
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
    
};

const remove = async (req, res) => {
    try {
        const foundId = await UserSchema.findById(req.params.id)

       await foundId.delete()

       res.status(204)

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
};

module.exports = {
    getUsers,
    signUp,
    update,
    remove
};
const express = require('express'); 

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAll);

router.get('/search', userController.getUsers);

router.post('/signup', userController.signUp);

router.put('/update/:id', userController.update);

router.delete('/delete/:id', userController.remove);

module.exports = router;
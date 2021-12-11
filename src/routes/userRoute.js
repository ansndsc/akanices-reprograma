const express = require('express'); 

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/signup', userController.signUp);

router.put('/update', userController.update);

router.delete('/delete', userController.remove);

module.exports = router;
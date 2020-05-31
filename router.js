const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.get('/', userController.home);   // it is like  func(rew=q,ses){...}.
router.post('/register', userController.register);

 


 module.exports =router;  // we can export any thing like {obj} ans so on.

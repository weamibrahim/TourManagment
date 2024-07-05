
const { verifyToken } = require("../middleware/authToken"); 
const {verifyRole} = require("../middleware/verfiyRole");
const userController = require("../Controller/UserController");
const express = require("express");
const router = express.Router();


router.post('/register', userController.register);
router.post('/login', userController.login);


router.get('/alluser', verifyToken,verifyRole,userController.getAllUsers);

// router.get('/:id',verifyToken, userController.getUserById);

router.delete('/delete/:id',verifyToken,verifyRole, userController.deleteUserById);


router.put('/update/:id',verifyToken, userController.updateUserById);




module.exports = router;

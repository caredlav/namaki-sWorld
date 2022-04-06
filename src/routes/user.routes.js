const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');

router.get("/registro", userController.getRegister);

router.get("/login",userController.getLogin);

module.exports=router;
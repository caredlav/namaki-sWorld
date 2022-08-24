const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const registerValid=require("../middlewares/registerValid");
const loginValid=require("../middlewares/loginValid");

router.get("/registro", userController.getRegister);
router.post("/registro", registerValid, userController.register);

router.get("/login",userController.getLogin);
router.post("/login",loginValid, userController.login);

module.exports=router;
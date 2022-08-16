const express = require("express");
const router = express.Router();
const userController = require('../controller/userController');
const registerValid=require("../middlewares/registerValid");

router.get("/registro", userController.getRegister);
router.post("/registro", registerValid, userController.register);

router.get("/login",userController.getLogin);

module.exports=router;
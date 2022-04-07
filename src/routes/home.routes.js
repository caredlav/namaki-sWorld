const express=require('express');
const router=express.Router();
const homeController=require('../controller/homeController');

router.get("/",homeController.home);

router.get("/SobreNosotros",homeController.getAboutUs);

module.exports=router;
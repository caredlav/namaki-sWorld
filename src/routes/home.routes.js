const express=require('express');
const router=express.Router();
const homeController=require('../controller/homeController');

router.get("/",homeController.home);

router.get("/SobreNosotros",homeController.getAboutUs);

router.get("/contacto", homeController.getContactoInfo);

module.exports=router;
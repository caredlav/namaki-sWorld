const express = require("express");
const router = express.Router();
const productsController = require("../controller/productController");

router.get("/categorias",productsController.getCategories);

module.exports=router;
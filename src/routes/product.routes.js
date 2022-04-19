const express = require("express");
const router = express.Router();
const productsController = require("../controller/productController");

router.get("/categorias",productsController.getCategories);
router.get("/categorias/anime",productsController.getSubCategoriesForAnime);

module.exports=router;
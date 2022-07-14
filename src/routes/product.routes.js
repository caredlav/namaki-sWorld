const express = require("express");
const router = express.Router();
const productsController = require("../controller/productController");

router.get("/categorias",productsController.getCategories);
router.get("/categorias/anime",productsController.getSubCategoriesForAnime);
router.get("/categorias/anime/figuras",productsController.getAnimeFigures);
router.get("/categorias/anime/resinas",productsController.getAnimeResins);
router.get("/categorias/anime/mangas",productsController.getAnimeMangas);
router.get("/categorias/anime/accesorios",productsController.getAnimeAccessories);
router.get("/categorias/anime/ropa",productsController.getAnimeClothes);

module.exports=router;
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
router.get("/categorias/videojuegos",productsController.getSubCategoriesForVideogames);
router.get("/categorias/videojuegos/juegos",productsController.getVideogames);
router.get("/categorias/videojuegos/consolas",productsController.getVideogamesConsoles);
router.get("/categorias/videojuegos/computadoras",productsController.getComputers);
router.get("/categorias/videojuegos/accesorios-consolas",productsController.getVideogamesAccessories);
router.get("/categorias/videojuegos/accesorios-computadoras",productsController.getComputersAccessories);
router.get("/categorias/comics",productsController.getSubCategoriesForComics);
router.get("/categorias/comics/figuras",productsController.getComicsFigures);
router.get("/categorias/comics/resinas",productsController.getComicsResins);
router.get("/categorias/comics/novelas",productsController.getComics);
router.get("/categorias/comics/accesorios",productsController.getComicsAccessories);
router.get("/categorias/comics/ropa",productsController.getComicsClothes);
router.get("/carrito",productsController.getShopingCart);

module.exports=router;
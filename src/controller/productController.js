const path = require("path");

const productController={

    getCategories: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/categories.html"));
    },
    getSubCategoriesForAnime: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/subCategoriesAnime.html"));
    },
    getAnimeFigures: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/animeFigures.html"));
    },
    getAnimeResins: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/animeResins.html"));
    },
    getAnimeMangas: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/animeMangas.html"));
    },
    getAnimeAccessories: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/animeAccessories.html"));
    },
    getAnimeClothes: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/animeClothes.html"));
    }
}

module.exports = productController;
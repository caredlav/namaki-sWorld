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
    },
    getSubCategoriesForVideogames: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/subCategoriesVideogames.html"));
    },
    getVideogames: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/videogames.html"));
    },
    getVideogamesAccessories: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/videogamesAccessories.html"));
    },
    getVideogamesConsoles: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/videogamesConsoles.html"));    
    },
    getComputers: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/computers.html"));
    },
    getComputersAccessories: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/products/computersAccessories.html"));
    }
}

module.exports = productController;
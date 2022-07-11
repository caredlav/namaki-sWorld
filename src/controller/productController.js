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
    }
}

module.exports = productController;
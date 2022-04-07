const path=require('path');

const homeController={
    home: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/home.html"));
    },
    getAboutUs: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/aboutUs.html"));
    }
}

module.exports=homeController;
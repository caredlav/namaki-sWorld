const path=require("path");
const userModel=require("../model/userModel");

const userController={
    getRegister: (req,res)=>{
        // res.sendFile(path.resolve(__dirname,"../views/users/register.html"));
        res.render("users/register");
    },
    register: (req,res)=>{
        let newUser=req.body;
        userModel.newUser(newUser);
        res.redirect("login");
    },
    getLogin: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/users/login.html"));
    }
}

module.exports=userController;
const path=require("path");
const userModel=require("../model/userModel");
const {validationResult}=require("express-validator");

const userController={
    getRegister: (req,res)=>{
        res.render("users/register");
    },
    register: (req,res)=>{        
        let newUser=req.body;
        let errors=validationResult(req);
        if (errors.isEmpty()) {
            userModel.newUser(newUser);
            res.redirect("login");
        } else {
            res.render("users/register",{err: errors.mapped(), oldData: req.body});
        }
       
    },
    getLogin: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/users/login.html"));
    }
}

module.exports=userController;
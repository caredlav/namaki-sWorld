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
            let userIfExitsByEmail=userModel.checkEmail(newUser);
            let userIfExitsByUserName=userModel.checkUserName(newUser);
            if(userIfExitsByEmail){
                res.render("users/register",{msgEMail: "El correo electrónico ya esta en uso", oldData: req.body});
            }else if(userIfExitsByUserName){
                res.render("users/register",{msgUserName: "El nombre de usuario ya existe", oldData: req.body});
            }else{
                userModel.newUser(newUser);
                res.redirect("login"); 
            }            
        } else {
            res.render("users/register",{err: errors.mapped(), oldData: req.body});
        }
       
    },
    getLogin: (req,res)=>{
        res.render("users/login");
    },
    login: (req,res)=>{
        let userData=req.body;
        let errors=validationResult(req);
        if (errors.isEmpty()) {
            let userFinded=userModel.login(userData);
            if (userFinded) {
                res.redirect('/');
            } else {
                res.render("users/login",{msg: "El usuario, el correo o la contraseña no son correctos."});
            } 
        } else {
            res.render("users/login",{err: errors.mapped()});
        }
        
    }
}

module.exports=userController;
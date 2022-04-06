const path=require("path");

const userController={
    getRegister: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/users/register.html"));
    },

    getLogin: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/users/login.html"));
    }
}

module.exports=userController;
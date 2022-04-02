const path=require("path");

const userController={
    getRegister: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/users/register.html"));
    }
}

module.exports=userController;
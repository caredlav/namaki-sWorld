const path=require("path");
const fs=require("fs");
const userDB=JSON.parse(fs.readFileSync(path.resolve(__dirname,"./users.json")),"utf-8");
const bcryptjs=require("bcryptjs");

const newId=()=>{
    let lastUser=userDB.pop();
    userDB.push(lastUser);
    let id=lastUser.id+1;
    return id;
}

const userModel={
    newUser: (user)=>{
        if (userDB.length==0) {
            let firstUser={
                id: 1,
                user: user.username,
                name: user.name,
                lastname: user.lastname,
                email: bcryptjs.hashSync(user.email,12),
                pass: user.pass            
            }
            userDB.push(firstUser);
            let userJSON=JSON.stringify(userDB,null,4);
            fs.writeFileSync(path.resolve(__dirname,"./users.json"),userJSON);
        } else {
            let newUser={
            id: newId(),
            user: user.userName,
            name: user.name,
            lastname: user.lastName,
            email: user.email,
            pass:  bcryptjs.hashSync(user.pass,12)
        }
            userDB.push(newUser);
            let userJSON=JSON.stringify(userDB,null,4);
            fs.writeFileSync(path.resolve(__dirname,"./users.json"),userJSON);
        }        
    }
}

module.exports=userModel;
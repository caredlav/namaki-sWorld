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

const findUser=(info,c)=>{
    if(c==1){
        let userToFind=userDB.find(user=>user.email==info.email || user.userName==info.userName);
        if (userToFind) {
            if (bcryptjs.compareSync(info.pass,userToFind.pass)) {                
                return userToFind;
            } else {
                return false;
            } 
        } else {
            return false;
        }            
    }else if(c==2){
        let userExistsByEmail=userDB.find(user=>user.email==info.email);
        if(userExistsByEmail) return true;        
    }else if(c==3){
        let userExistsByUserName=userDB.find(user=>user.userName==info.userName);
        if(userExistsByUserName) return true;
    }
}

const userModel={
    newUser: (user)=>{
        if (userDB.length==0) {
            let firstUser={
                id: 1,
                userName: user.userName,
                name: user.name,
                lastName: user.lastName,
                email: bcryptjs.hashSync(user.email,12),
                pass: user.pass            
            }
            userDB.push(firstUser);
            let userJSON=JSON.stringify(userDB,null,4);
            fs.writeFileSync(path.resolve(__dirname,"./users.json"),userJSON);
        } else {
            let newUser={
            id: newId(),
            userName: user.userName,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            pass:  bcryptjs.hashSync(user.pass,12)
        }
            userDB.push(newUser);
            let userJSON=JSON.stringify(userDB,null,4);
            fs.writeFileSync(path.resolve(__dirname,"./users.json"),userJSON);
        }        
    },
    login: (data)=>{
        let userIfExits=findUser(data,1);
        if (userIfExits) {
            return userIfExits;
        } else {
            return false;   
        }
    },
    checkEmail: (data)=>{
        let emailChecked=findUser(data,2);
        if(emailChecked){
            return true;
        }else{
            return false;
        }
    },
    checkUserName: (data)=>{
        let userNameChecked=findUser(data,3)
        if(userNameChecked){
            return true;
        }else{
            return false;
        }
    }
}

module.exports=userModel;
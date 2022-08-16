const {body}=require("express-validator");

const registerValid=[
    body("userName")
    .notEmpty()
    .withMessage("El campo no puede estar vacio.")
    .bail()
    .isLength({min: 4})
    .withMessage("El nombre de usuario debe tener como minimo cuatro caracteres"),

    body("name")
    .notEmpty()
    .withMessage("El campo no puede estar vacio.")
    .bail()
    .isLength({min: 4})
    .withMessage("El nombre debe tener como minimo cuatro caracteres")
    .bail()
    .not()
    .isNumeric()
    .withMessage("El nombre no puede ser únicamente números."),

    body("lastName")
    .notEmpty()
    .withMessage("El campo no puede estar vacio.")
    .bail()
    .isLength({min: 5})
    .withMessage("El apellido debe tener como minimo cinco caracteres")
    .bail()
    .not()
    .isNumeric()
    .withMessage("El apellido no puede ser únicamente números."),

    body("email")
    .notEmpty()
    .withMessage("El campo no puede estar vacio.")
    .bail()
    .isEmail()
    .withMessage("El correo electrónico debe estar en el formato correspondiente."),

    body("pass")
    .notEmpty()
    .withMessage("El campo no puede estar vacio.")
    .bail()
    .isLength({min: 8})
    .withMessage("La contraseña debe tener minimo ocho caracteres.")
    .custom((value,{req})=>{
        let caracteres = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\d)(?=.*[@$!%*?&."#-_])[A-Za-z\d@$!%*?&."#-_]{8,}$/;
        if(!caracteres.test(req.body.pass)){
            return false
        }else{
            return true
        }
    })
    .withMessage("La contraseña debe contener minimo una letra en mayúscula, una letra en minúscula, un número y un caracter especial."),

    body("repass")
    .notEmpty()
    .withMessage("El campo no puede estar vacio.")
    .bail()
    .isLength({min: 8})
    .withMessage("La contraseña debe tener minimo ocho caracteres.")
    .custom((value,{req})=>{
        if(req.body.pass==value){
            return true;
        }else{
            return false;
        }
    })
    .withMessage("Las contraseñas no son iguales. Confirme nuevamente las contraseñas.")
];

module.exports=registerValid;
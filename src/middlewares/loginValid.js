const {body}=require('express-validator');

const loginValid=[
    body("userName")
    .notEmpty()
    .withMessage("El campo no puede estar vacío."),

    body("pass")
    .notEmpty()
    .withMessage("El campo no puede estar vacío.")    
];

module.exports=loginValid;
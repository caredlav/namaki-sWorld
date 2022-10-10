const express=require('express');
const app=express();
const path=require('path');

const routerHome=require('./routes/home.routes');
const routerUser=require('./routes/user.routes');
const routerProduct=require('./routes/product.routes')

//configuramos la carpeta public para que sea visible del lado del cliente
app.use(express.static('public'));

//configuracion para usar ejs
app.set("view engine","ejs");

app.set('views',path.resolve(__dirname,"./views"));

//configuramos la lectura de datos mediante formularios
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//declaramos las rutas
app.use('/',routerHome);
app.use('/',routerUser);
app.use('/',routerProduct);

//renderizar página de error
app.use((req,res,next)=>{
    res.render("error");
})

//se levanta el servidor en el puerto 3000
app.listen(3000,console.log('corriendo en puerto 3000'));
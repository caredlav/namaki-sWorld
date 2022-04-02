const express=require('express');
const app=express();
const path=require('path');

const routerHome=require('./routes/home.routes');
const routerUser=require('./routes/user.routes');

app.set('views',path.resolve(__dirname,"./views"));

//configuramos la carpeta public para que sea visible del lado del cliente
app.use(express.static('public'));

//declaramos las rutas
app.use('/',routerHome);
app.use('/',routerUser);

//se levanta el servidor en el puerto 3000
app.listen(3000,console.log('corriendo en puerto 3000'));
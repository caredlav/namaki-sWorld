const express=require('express');
const app=express();
const path=require('path');

const routerHome=require('./routes/home.routes');

app.set('views',path.resolve(__dirname,"./views"));

//configuramos la carpeta public para que sea publica
app.use(express.static('public'));

//declaramos las rutas
app.use('/',routerHome);

//se levanta el servidor en el puerto 3000
app.listen(3000,console.log('corriendo en puerto 3000'));
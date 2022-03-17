const express=require('express');
const app=express();
const path=require('path');

const routerHome=require('./routes/home.routes');

app.set('views',path.resolve(__dirname,"./views"));

app.use('/',routerHome);


app.listen(3000,console.log('corriendo en puerto 3000'));
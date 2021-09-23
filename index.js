const express=require('express'); //sintaxis de importacion en nodejs
require('dotenv').config();
const { dbConection } = require('./config/database');
const cors=require('cors');


//Crear el servidor express
const app=express();

//Configurar cors
app.use(cors()); //cualquier servior distinto a mi servidor se ejecutará


//Conexion BD
dbConection();
//console.log(process.env);
//console.log(process.env.DB_CNN);

//Rutas de la API Proyectos
app.get('/',(req,res)=>{
    res.status(400).json({
        ok:true,
        msg:'Bienvenidos a NodeJS'
    });
});

//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto:'+ process.env.PORT);
})

//app.listen(3000,()=>{
//    console.log('Servidor desplegado en el puerto:'+ 3000);
//})


//eEOQDBv9ZaTcbZkS

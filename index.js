const express=require('express'); //sintaxis de importacion en nodejs
require('dotenv').config();

const { dbConection } = require('./config/database');
const cors=require('cors');

//Crear el servidor express
const app=express();

//Configurar cors
app.use(cors()); //cualquier servior distinto a mi servidor se ejecutará

//Lectura y parseo del body
app.use(express.json());

//Conexion BD
dbConection();

//console.log(process.env);

//Rutas de la API
app.use('/api/usuarios',require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));
//app.use('/api/investigadores',require('./routes/investigadores.routes'));


//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor desplegado en el puerto:'+ process.env.PORT);
})



//eEOQDBv9ZaTcbZkS

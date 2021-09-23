const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        //Debemos utilizar la cadena de conexion que tenemos en mongocompass        

        //mongodb+srv://adminproject:lYesa3bSGgcGH6bE@cluster0.bjami.mongodb.net/proyectosdb
        //mongodb+srv://adminproject:eEOQDBv9ZaTcbZkS@cluster0.4mgjw.mongodb.net/test?authSource=admin&replicaSet=atlas-y7gfs0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
        //mongodb://adminproject:eEOQDBv9ZaTcbZkS@cluster0-shard-00-00.4mgjw.mongodb.net:27017,cluster0-shard-00-01.4mgjw.mongodb.net:27017,cluster0-shard-00-02.4mgjw.mongodb.net:27017/test

        await mongoose.connect(process.env.DB_CNN);

        console.log('Conexion exitosa a la BD')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}
module.exports ={
    dbConection
}
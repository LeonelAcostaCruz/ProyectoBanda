const express = require('express');
const MongoClient = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

const mongoURI = 'mongodb://localhost:27017/nodejs-mongodb-app';
const dbName = 'test/si';

app.get('/', (req, res) => {
  // Conectar a MongoDB

    console.log('Conexión exitosa a MongoDB');

    // Cerrar la conexión después de la operación
  

    // Enviar el archivo index.html con el mensaje de conexión exitosa
    res.sendFile(path.join(__dirname, 'public/pantallaInicio.html')); 
   });


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

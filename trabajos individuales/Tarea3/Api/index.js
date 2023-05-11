const express = require('express')
const rutas = require('./Routes/autos.routes')



const app = express();

app.use(express.json());
app.use('/', rutas);


module.exports = app;



const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//DEFINIMOS EL MODULO EXPRESS PARA USARLO 
//Y PODER USAR LAS FUNCIONES DE RUTAS
const clientesRouter = require('./routes/clientes.routes');
const app = express();

//CONFIGURAMOS LOS MODULOS QUE UTILIZAREMOS EN LA APLICACION
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(clientesRouter);

//USAMOS EL NEXT PARA MANEJAR LOS ERRORES DE LAS RUTAS
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


app.listen(1000)
console.log('Server running on port 1000');
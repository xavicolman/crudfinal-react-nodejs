const { Router } = require('express');
const { getAllClientes, getClienteEspecifico, crearCliente, eliminarCliente, actualizaCliente} = require('../controllers/clientes.controllers');

const router = Router();

//RUTAS ASIGNADAS A LAS FUNCIONES
router.get('/clientes', getAllClientes);

router.get('/clientes/:id', getClienteEspecifico);

router.post('/clientes', crearCliente);

router.delete('/clientes/:id_delete', eliminarCliente);

router.put('/clientes/:id_actualiza',actualizaCliente);

module.exports = router;
const pool = require('../db');

//FUNCION PARA OBTENER TODOS LOS CLIENTES****************************************************************************************
const getAllClientes = async (req, res, next) => {
  try
  { 
    //throw new Error('Error de prueba');
    const allClientes = await pool.query('SELECT * FROM cliente');
    res.json(allClientes.rows);
  }
  catch (error)
  {  
    next(error);
  }
}

//FUNCION PARA OBTENER UN CLIENTE ESPECIFICO****************************************************************************************
const getClienteEspecifico = async (req, res, next) => {
  try
  {
    const {id} = req.params;
    const result = await pool.query('SELECT * FROM cliente WHERE id = $1', [id])
    console.log(result)
    if (result.rows.length === 0)
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  
    res.json(result.rows[0]);
  } catch (error)
  {
    next(error);    
  }
}

//FUNCION PARA CREAR UN CLIENTE****************************************************************************************
const crearCliente = async (req, res, next) => {
  try
  { 
    const { nombre, ci, d_fecha_nacimiento, direccion, telefono, obs } = req.body;
    const result = await pool.query('INSERT INTO cliente (nombre, ci, d_fecha_nacimiento, direccion, telefono, obs) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [nombre, ci, d_fecha_nacimiento, direccion, telefono, obs]);
    res.json(result.rows[0]);

  }
  catch (error)
  {
    next(error);
  }
}

//FUNCION PARA ELIMINAR UN CLIENTE****************************************************************************************
const eliminarCliente = async (req, res, next) => {

  try {
    const {id_delete} = req.params;
    const result = await pool.query('DELETE FROM cliente WHERE id = $1', [id_delete]);
  
    if (result.rowCount === 0)
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  
    return res.sendStatus(204);
    
  } catch (error) {
    next(error);
  }

}

//FUNCION PARA ACTUALIZAR UN CLIENTE****************************************************************************************
const actualizaCliente = async (req, res, next) => {

  try
  {
    const {id_actualiza} = req.params;
    const { nombre, ci, d_fecha_nacimiento, direccion, telefono, obs } = req.body;
    const result = await pool.query('UPDATE cliente SET nombre = $1, ci = $2, d_fecha_nacimiento = $3, direccion = $4, telefono = $5, obs = $6 WHERE id = $7 RETURNING *',
    [nombre, ci, d_fecha_nacimiento, direccion, telefono, obs, id_actualiza]);
  
    if (result.rows.length === 0)
    return res.status(404).json({
      message: 'Cliente no encontrado'
    });
  
    return res.json(result.rows[0]);
  } catch (error)
  {
    next(error);
  }
};

//EXPORTAMOS LAS FUNCIONES****************************************************************************************
module.exports = {
  getAllClientes,
  getClienteEspecifico,
  crearCliente,
  eliminarCliente,
  actualizaCliente
}
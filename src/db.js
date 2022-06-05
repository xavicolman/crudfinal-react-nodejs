const {Pool} = require('pg');
const {db} = require('./config');

// TRAEMOS LAS VARIABLES DE ENTORNO DE .env 
const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database
});

module.exports = pool;
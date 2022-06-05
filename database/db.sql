CREATE DATABASE clientesdb

CREATE TABLE cliente (
    id SERIAL PRIMARY KEY,
    nombre varchar(255),
    ci INT UNIQUE,
    d_fecha_nacimiento DATE,
    direccion varchar(255),
    telefono varchar,
    obs varchar(255)
);
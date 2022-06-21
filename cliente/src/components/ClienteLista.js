//el comando rfc es para crear componentes facilmente
import { useEffect, useState } from "react"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ClienteLista() {

  const [clientes, setClientes] = useState([]);

    const busca_clientes = async () => {
      const result = await fetch('http://localhost:1000/clientes');
      const datos = await result.json();
      //console.log(datos);
      setClientes(datos);
    }

    useEffect(() => {
      busca_clientes();
    }, []);

    const datos = [
      { id: 1, lastName: 'Francisco colman', cedula: '5255054', fecha_nacimiento: '08/04/1997', direccion: 'Tavapy' , telefono: '0973635373', observacion: "Hola mundo dede una observacion" },
      { id: 2, lastName: 'Francisco colman', cedula: '5255054', fecha_nacimiento: '08/04/1997', direccion: 'Tavapy' , telefono: '0973635373', observacion: "Hola mundo dede una observacion" },
      { id: 3, lastName: 'Francisco colman', cedula: '5255054', fecha_nacimiento: '08/04/1997', direccion: 'Tavapy' , telefono: '0973635373', observacion: "Hola mundo dede una observacion" },

    ];
    
    return (
      <>  
      <h1>Clientes</h1>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Cedula</TableCell>
            <TableCell align="right">Fecha nacimiento</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Observacion</TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
          {datos.map((datos) => (
            <TableRow
              key={datos.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {datos.lastName}
              </TableCell>
              <TableCell align="right">{datos.cedula}</TableCell>
              <TableCell align="right">{datos.fecha_nacimiento}</TableCell>
              <TableCell align="right">{datos.direccion}</TableCell>
              <TableCell align="right">{datos.telefono}</TableCell>
              <TableCell align="right">{datos.observacion}</TableCell>

            </TableRow>
          ))}
        </TableBody>

        </Table>

        </TableContainer>



      </>

  )
}

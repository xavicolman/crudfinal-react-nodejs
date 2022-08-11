//el comando rfc es para crear componentes facilmente
import { useEffect, useState } from "react"
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
//import { DeleteIcon, EditIcon } from "@mui/icons-material/";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';



const handleEditClick = async (id) => () => {
  console.log("Editar", id);


};

const handleDeleteClick = async (id) =>  {
  //console.log("Eliminar");
  const res = await fetch(`http://localhost:1000/clientes/${id}`,{
    method: "DELETE",
  });
  console.log(res)
}

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 200,
    editable: true,
  },
  {
    field: 'ci',
    headerName: 'Cedula',
    width: 100,
    editable: true,
  },
  {
    field: 'd_fecha_nacimiento',
    headerName: 'Fecha nac.',
    width: 140,
    editable: true,
  },
  {
    field: 'direccion',
    headerName: 'Direccion',
    width: 150,
    editable: true,
  },
  {
    field: 'telefono',
    headerName: 'Telefono',
    width: 150,
    editable: true,
  },
  {
    field: 'obs',
    headerName: 'Observacion',
    width: 200,
    editable: true,
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 100,
    cellClassName: "actions",
    getActions: ({ id }) => {

      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          //onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
          
        />
        
      ];
    }
  }
];



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


  return (
    <>
      <h1>Clientes</h1>

      <Box sx={{ height: 400, width: '100%', backgroundColor: "#a5a5a5" }}>
        <DataGrid
          rows={clientes}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>

    </>

  )
}

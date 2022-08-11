import { Grid, Typography, TextField, Button, Box, CircularProgress } from "@mui/material";
import Link from "@mui/material/Link";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.youtube.com/">
        Gabriel Colman
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function ClienteFormulario() {
  //Definimoa un estado para guardar las tareas
  const [cliente, Setcliente] = useState({
    nombre: "",
    ci: "",
    d_fecha_nacimiento: "",
    direccion: "",
    telefono: "",
    obs: ""
  });


  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);


  const maneja_evento_submit = async (evento) => {
    evento.preventDefault();
    //console.log(cliente);

    setLoading(true);
    await fetch('http://localhost:1000/clientes', {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: { "Content-Type": "application/json" },
    });
    //const datos = await res.json();
    //console.log(datos);
    setLoading(false);
    navigate('/')

  };


  const changeFormRegistro = (e) => {
    //console.log(e.target.name, e.target.value);
    Setcliente({ ...cliente, [e.target.name]: e.target.value.toUpperCase() });
  };


  return (
    <Grid container alignItems="center" direction="column">
      <Box
        sx={{
          width: 650,
          height: 560,
          backgroundColor: "#a5a5a5",
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ mt: 2 }}
          style={{ fontWeight: "bold", color: "white" }}
        >
          Nuevo registro
        </Typography>

        <Box
          component="form"
          onSubmit={maneja_evento_submit}
          sx={{ mt: 3, width: 500, height: 250 }}
        >

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={changeFormRegistro}
                id="Nombre"
                label="Nombre"
                name="nombre"
                inputProps={{
                  style: { color: "white", textTransform: "uppercase", disableUnderline: true }
                }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="ci"
                required
                fullWidth
                type="number"
                id="ci"
                label="Cédula"
                onChange={changeFormRegistro}
                autoFocus
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="telefono"
                label="Telefono"
                name="telefono"
                type="number"
                onChange={changeFormRegistro}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="d_fecha_nacimiento"
                required
                fullWidth
                id="d_fecha_nacimiento"
                label="Feha de nacimiento"
                autoFocus
                type="date"
                onChange={changeFormRegistro}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" }, shrink: true }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="direccion"
                label="Dirección"
                name="direccion"
                onChange={changeFormRegistro}
                inputProps={{
                  style: { color: "white", textTransform: "uppercase" }
                }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="obs"
                label="Observaciones"
                name="obs"
                onChange={changeFormRegistro}
                multiline
                rows={4}
                inputProps={{
                  style: { color: "white", textTransform: "uppercase" }
                }}
                InputLabelProps={{ style: { color: "white" } }}
              />


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Guardar"
                )}
              </Button>

            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}
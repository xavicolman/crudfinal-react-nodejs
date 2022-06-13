import { Grid, Typography, TextField, Button, Container, Box } from "@mui/material"
import Link from '@mui/material/Link';



function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.youtube.com/">
        Gabriel Colman
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function ClienteFormulario() {

  const maneja_evento_submit = (evento) => {
    evento.preventDefault();
    console.log("Formulario enviado");
  }

  return (
    <Container>

      <Box
        sx={{
          width: 650,
          height: 560,
          backgroundColor: "#1e272e",
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}  style={{ fontWeight: "bold" }}>
          Nuevo registro
        </Typography>

        <Box component="form" sx={{ mt: 3, width: 500, height: 250 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Nombre"
                label="Nombre"
                name="Nombre"
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="Cualquier"
                required
                fullWidth
                id="firstName"
                label="Cédula"
                autoFocus
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Telefono"
                name="Telefono"
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="Cualquier"
                required
                fullWidth
                id="firstName"
                label="Feha de nacimiento"
                autoFocus
                type="date"
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Nombre"
                label="Dirección"
                name="Nombre"
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Nombre"
                label="Observaciones"
                name="Nombre"
                multiline
                rows={4}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                Guardar
              </Button>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

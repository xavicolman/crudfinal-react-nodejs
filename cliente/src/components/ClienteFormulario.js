import { Grid, Typography, Card, CardContent, TextField, Button } from "@mui/material"
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
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item sx={12} style={{ width: "550px" }}>
        <Card sx={{ mt: 5 }} style={{ backgroundColor: "#1e272e", padding: "1rem" }}>
          <Typography variant="S" textAlign="center" color="white">CREAR NUEVO CLIENTE</Typography>
          <CardContent>
            <form onSubmit={maneja_evento_submit}>

              <TextField
                variant="filled"
                label="Nombre"
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                fullWidth
              />

              <Grid container spacing={2}>
                <Grid item sx={12} sm={6}>
                  <TextField
                    variant="filled"
                    label="Cedula"
                    sx={{ display: "block", margin: ".5rem 0" }}
                    inputProps={{ style: { color: "white" } }}
                    InputLabelProps={{ style: { color: "white" } }}
                    fullWidth
                  />
                </Grid>
                <Grid item sx={12} sm={6}>
                  <TextField
                    variant="filled"
                    label="Telefono"
                    sx={{ display: "block", margin: ".5rem 0" }}
                    inputProps={{ style: { color: "white" } }}
                    InputLabelProps={{ style: { color: "white" } }}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sx={12} sm={6}>
                  <TextField
                    variant="filled"
                    label="Fecha de nacimiento"
                    sx={{ display: "block", margin: ".7rem 0" }}
                    inputProps={{ style: { color: "white" } }}
                    InputLabelProps={{ style: { color: "white" } }}
                    fullWidth
                    type="date"
                  />
                </Grid>
              </Grid>

              <TextField
                variant="filled"
                label="Dirección "
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                fullWidth
              />

              <TextField
                variant="filled"
                label="Observacion"
                multiline
                rows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                fullWidth
              />

              <Button variant="contained" color="primary" type="submit">
                Guardar
              </Button>

            </form>
          </CardContent>
        </Card>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Grid>
  );
}

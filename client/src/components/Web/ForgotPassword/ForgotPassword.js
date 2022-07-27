import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";

const register = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Recuperación de contraseña</h2>
          <Typography variant="caption" gutterBottom>
            Por favor ingrese su mail para recuperar la contraseña
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            name="email"
            label="email"
            placeholder="Ingrese su mail"
          />
          <Button type="submit" variant="contained" color="primary">
            Registrarse
          </Button>
        </form>
        <Typography>
            ¿Ya tiene cuenta?
            <Link to="/"> ¡Ingrese!</Link>
        </Typography>
        <Typography>
          ¿Aun no tiene una cuenta?
          <Link to="/register">Registrese!</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default register;

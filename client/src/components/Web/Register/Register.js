import React, { useState } from "react";
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


const Register = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Registro</h2>
          <Typography variant="caption" gutterBottom>
            Por favor ingrese los datos para completar el registro
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Ingrese su nombre" />
          <TextField
            fullWidth
            label="Email"
            placeholder="Ingrese su email de la empresa"
            value={email}
            onChange={e=> setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={e=> setPassword(e.target.valuec)}

          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            value={password}

          />
          <Button type="submit" variant="contained" color="primary">
            Registrarse
          </Button>
        </form>
        <Typography>
          <Link to="/ForgotPassword">Olvidó su contraseña?</Link>
        </Typography>
        <Typography>
          ¿Ya tiene una cuenta?
          <Link to="/">¡Ingrese!</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;

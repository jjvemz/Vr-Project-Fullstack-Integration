import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";


const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [username, setUsername] = useState('');
  const [error, setError] = useState("");


  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Ingreso</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={e =>{
            setUsername(e.target.value)
          }}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          value={username}
          onChange={e =>{
            setUsername(e.target.value)
          }}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link to="/ForgotPassword">Olvidó su contraseña?</Link>
        </Typography>
        <Typography>
          ¿Aun no tiene una cuenta?
          <Link to="/register">Registrese!</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;

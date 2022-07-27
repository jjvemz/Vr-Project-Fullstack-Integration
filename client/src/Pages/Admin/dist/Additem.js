import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import ImageIcon from "@mui/icons-material/Image";
import './Aditem.css'

export default function AddItem() {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [inputs, setInputs] = useState({
    author: "",
    image: "",
    description: "",
    date: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <ImageIcon />
            </Avatar>
            <h2>Ingreso de itemes</h2>
          </Grid>
          <TextField name="author" label="Autor" type="text" />

          <TextField name="description" label="Descripión" type="text" />

          <TextField name="description" label="Fecha" type="date" />

          <div class="upload-btn-wrapper">
            <button class="btn">Ingresar archivo</button>
            <input type="file" name="myfile" />
          </div>
          <Button variant="contained" color="primary" type="submit">
            ingresar item
          </Button>
        </Paper>
      </Grid>
    </form>
  );
}

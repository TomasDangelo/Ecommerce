import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom"

const Header = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Ruth Pastelería
          </Typography>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/productos">Productos</Button>
          <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;

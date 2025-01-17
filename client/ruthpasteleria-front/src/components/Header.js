import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from "react-router-dom"
import logoRuth from '../assets/ruth-logo.jpg'
const Header = () => {
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}><img src={logoRuth} alt="Logo" style={{ height: '50px', width: 'auto',  mixBlendMode: 'multiply' }} /></Box>
          <Typography variant="h6" style={{ flexGrow: 1 }}> Ruth Pastelería</Typography>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/productos">Productos</Button>
          <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
          <Button color="inherit" component={Link} to="/carrito">Carrito</Button>

        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;

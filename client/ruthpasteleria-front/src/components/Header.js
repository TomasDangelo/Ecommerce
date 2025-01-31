import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText  } from '@mui/material'
import { Link } from "react-router-dom"
import {Menu as MenuIcon} from '@mui/icons-material';
import logoRuth from '../assets/ruth-logo.jpg'
const Header = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
      <AppBar color="primary" position="static">
        <Toolbar>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, alignItems: 'center', flexGrow: 1 }}>
          <img src={logoRuth} alt="Logo" style={{ height: '50px', width: 'auto',  mixBlendMode: 'multiply' }} />
          <Typography variant="h6" sx={{ml: 2}}> Ruth Pastelería</Typography>
        </Box>
        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
          <Button color="secondary" component={Link} to="/">Inicio</Button>
          <Button color="secondary" component={Link} to="/productos">Productos</Button>
          <Button color="secondary" component={Link} to="/contacto">Contacto</Button>
          <Button color="secondary" component={Link} to="/carrito">Carrito</Button>
        </Box>
        <IconButton color="secondary" sx={{display: {xs: 'block', md: 'none'}}} onClick={()=> setOpen(true)}>
          <MenuIcon/>
        </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {[
            { text: 'Inicio', path: '/' },
            { text: 'Productos', path: '/productos' },
            { text: 'Contacto', path: '/contacto' },
            { text: 'Carrito', path: '/carrito' }
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={() => setOpen(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </>
    );
  };
  
  export default Header;

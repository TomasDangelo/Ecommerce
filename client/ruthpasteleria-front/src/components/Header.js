import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, styled, ListItem, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartTwoTone';
import logoRuth from '../assets/ruth-logo.jpg';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'black',
  transition: 'background-color 0.3s ease-in-out',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  '&:hover': { backgroundColor: 'pink', color: 'black' },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          {/* Logo en Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, objectFit: 'contain', alignItems: 'center', flexGrow: 1 }}>
            <img src={logoRuth} alt="Logo" style={{ height: '4rem', width: 'auto', mixBlendMode: 'multiply', borderRadius: '0.5rem' }} />
          </Box>

          {/* Menú en Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
            <Button color="black" component={StyledLink} to="/">Inicio</Button>
            <Button color="black" component={StyledLink} to="/sobremi">Sobre Mi</Button>
            <Button color="black" component={StyledLink} to="/contacto">Contacto</Button>
            <Button color="black" component={StyledLink} to="/carrito">
              <ShoppingCartIcon />
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton color="secondary" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Button component={StyledLink} color="black" to="/carrito" sx={{ ml: 1 }}>
              <ShoppingCartIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {[
            { text: 'Inicio', path: '/' },
            { text: 'Sobre mi', path: '/sobremi' },
            { text: 'Contacto', path: '/contacto' },
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={() => setOpen(false)}>
              <ListItemText primary={item.text.toUpperCase()} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

import React, {useState} from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, styled, ListItem, ListItemText  } from '@mui/material'
import { Link } from "react-router-dom"
import {Menu as MenuIcon} from '@mui/icons-material';
import logoRuth from '../assets/ruth-logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartTwoTone';

const StyledLink = styled(Link)(({ theme }) => ({ textDecoration: 'none',  color: 'black',  transition: 'background-color 0.3s ease-in-out',  padding: theme.spacing(1, 2),  borderRadius: theme.shape.borderRadius,  '&:hover': {   backgroundColor: 'pink',    color: 'black', },}));

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
      <AppBar color="primary" position="static">
        <Toolbar> 
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, objectFit: 'contain',  alignItems: 'center', flexGrow: 1 }}>
          <img src={logoRuth} alt="Logo" style={{ height: '4rem', width: 'auto',  mixBlendMode: 'multiply', borderRadius: '0.5rem' }} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'flex'}, gap: '1rem'}}>
          <Button color="black" component={StyledLink}  sx={{transition: 'transform 0.3s ease-in-out' ,  '&:hover': { transform: 'backgroundColor: pink' },  }} to="/">Inicio</Button>
          <Button color="black" component={StyledLink} to="/sobremi">Sobre Mi</Button>
          <Button color="black" component={StyledLink} to="/contacto">Contacto</Button>
          <Button color="black" component={StyledLink} to="/carrito"> <ShoppingCartIcon></ShoppingCartIcon></Button>
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
            { text: 'Sobre mi', path: '/sobremi' },
            { text: 'Contacto', path: '/contacto' },
            { text: 'Carrito', path: '/carrito' }
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path} onClick={() => setOpen(false)}>
              <ListItemText  primary={item.text.toUpperCase()} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </>
    );
  };
  
  export default Header;

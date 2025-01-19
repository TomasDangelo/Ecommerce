import React from 'react'
import { Box, Typography } from '@mui/material';

const NotFound = () =>{

    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h4">Página no encontrada</Typography>
        </Box>
    )
}

export default NotFound;

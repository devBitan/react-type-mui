import React from 'react';
// import { NavBar } from '../../organisms/navbar/NavBar';
import PrimarySearchAppBar from '../../organisms/navbarSearch/NavbarSearch';
import { Box } from '@mui/material';

export const AdminCoder: React.FC = () => (
    <>
        <PrimarySearchAppBar />
        <Box 
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                maxWidth: 1150,
                maxHeight: 823,
                borderRadius: 3,
                marginX: 'auto',
                marginY: 3,
                border: 2.5,
                paddingY: 4,
                paddingX: 4,
                borderColor: 'rgb(88, 85, 85)',
                boxShadow: '1px 5px 5px #858585',
                gap:5
            }}
        >
            <h1>Admin Coder Dashboard</h1>
        </Box>
        
        
    </>
);


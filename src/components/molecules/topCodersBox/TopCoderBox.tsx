import React, { ReactNode } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TopCoderBoxProps {
    children: ReactNode;  // children components to be rendered within the box
}

export const TopCoderBox: React.FC<TopCoderBoxProps> = ({ children }) => {
    const boxStyle = {
        p: 1, // Padding
        maxWidth: '520px',
        height: '350px',
        boxShadow: '0px 5px 4px #0000007d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 2.3,
        gap: 0.5,
        borderColor:'#7F7D96',
        borderRadius: '8px',
        backgroundColor: 'background.paper',
        fontFamily: 'Ubuntu'
    }
    return (
        <Box sx={boxStyle}>
            <Grid container style={{display: 'flex', justifyContent: 'space-around', justifySelf: 'left'}}>
            <Typography variant="h6" >Top Coders de la semana</Typography>
            <Typography variant="h6" >Clan</Typography>
            <Typography variant="h6" >Coins</Typography>
            </Grid>
            <Grid container>
                {children}
            </Grid>
        </Box>
    );
}

import { Typography } from "@mui/material";
import * as React from 'react';
import './style.css';

// interface TableData {
//     data: number[];
//     clnas: string[];
//     colors: string[];
//   }

const ClanForEachModule: React.FC = () => {
    return (
        <>
            <Typography
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    fontSize: 16,
                    color: 'inherit',
                    textDecoration: 'none',
                    
                }}
            >
                <div className='clanForEachModule'>
                    <p className='firstLetter'>G</p>
                    <p>Gosling</p>
                    <p>-</p>
                    <p>43</p>
                </div>
            </Typography>
        </>
    )
}

export default ClanForEachModule;





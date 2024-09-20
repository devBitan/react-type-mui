import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './CoderCard.css'

interface CoderCardProps {
  name: string;
  mail: string;
  coins: number;
  clan: string;
  imgUrl: string;
  classImg : string;
}

export const CoderCard: React.FC<CoderCardProps> = ({ name, mail, coins, clan, imgUrl, classImg }) => {
  return (
     <Grid container  marginTop={2} ml={2.5}>
        <Grid className='container' item>
          <Card className='card' sx={{ height: 74, width: 246, borderRadius: 3, backgroundColor: '#F9FAFB', boxShadow: '1px 5px 5px #858585', border: 1.3, borderColor: '#d4d5d6'}}>
            <CardContent className='content'>
              <Box display="flex" alignItems="center" justifyContent="left">
                <Avatar className={classImg} sx={{height: 32, width: 32}} alt='user' src={imgUrl} />
                <Box ml={1.5} className='textCoder'>
                  <Typography variant="h6" className='nameCoder' sx={{fontSize: 16}}>{name}</Typography>
                  <Typography variant='h6' className='mailCoder' sx={{fontSize: 14, color: '#475467'}}>{mail}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Box mt={2} className='outsideBox'>
            <Typography variant="h6" className='nameClan' sx={{fontSize: 20, color: '#101828'}}>{clan}</Typography>
            <Typography variant="h6" className='numCoins' sx={{fontSize: 20, color: '#101828', marginLeft: 0.5}}>{coins}</Typography>
          </Box>
        </Grid>
    </Grid>
  );
}

export default CoderCard;

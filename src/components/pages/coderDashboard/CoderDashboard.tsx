import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import BarChartLayout from '../../molecules/BarChart/BarChartLayout';
import BarChartCircleLayout from '../../molecules/BarChartCircle/BarChartCircleLayout';
import { httpService } from '../../../api/http';

export const CoderDashboard: React.FC = () => {
    const id = "1f4a99a9-04ab-4e58-80e5-842c231b50e7"
    const [coder, setCoder] = useState<any[]>([]);
    const { httpGet } = httpService();
  
    useEffect(() => {
        async function getUser(): Promise<any> {
          let response = await httpGet('users/full/1f4a99a9-04ab-4e58-80e5-842c231b50e7'); // cambio para quw reciba el id de sentinela
          // console.log(response)
          return response;
      }
      const fetchDataUser = async () => {
          try {
              const userData = await getUser(); //aqui paso el id de sentinela
              setCoder(userData);
              console.log(userData);
              console.log(coder);
          } catch (error) {
              console.error('Error fetching User:', error);
          }
      };

      fetchDataUser();
    }, []);
  
    return (
      <>
        <Box sx={{
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
           gap: 5
        }}>
          <BarChartLayout title='Coins por modulo' />
          <BarChartCircleLayout title='Coins semanales' />
        </Box>
      </>
    );
  };
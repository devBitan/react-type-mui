import React from 'react';
import './style.css'
import { Typography } from "@mui/material";
import BarChartCirclePointsOfWeek from './BarChartCircle';

interface BarChartCircleProps {
  title: string;
}

export const BarChartCircleLayout: React.FC<BarChartCircleProps> = ({title}) => {
  return (
    <>
      <div className='admin-barchart '>
        <Typography variant="h6">{title}</Typography>
        <BarChartCirclePointsOfWeek />
      </div>

    </>
  )
};


export default BarChartCircleLayout;
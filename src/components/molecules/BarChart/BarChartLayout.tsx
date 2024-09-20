import React from 'react';
import BarChartTotalPoints from './BarChart';
import './style.css';
import { Typography } from "@mui/material";

interface BarChartLayoutProps {
  title: string;
}

export const BarChartLayout: React.FC<BarChartLayoutProps> = ({ title }) => {
  return (
    <>
      <div className='admin-barchart'>
        <Typography variant="h6">{title}</Typography>
        <BarChartTotalPoints />
      </div>
    </>
  );
};

export default BarChartLayout;

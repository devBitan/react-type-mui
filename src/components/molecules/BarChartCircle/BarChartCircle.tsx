import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './style.css';
import { BorderAllRounded, BorderStyleRounded } from '@mui/icons-material';
// import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCharts: React.FC = () => {
  const data1 = {
    labels: ['Desarrollo'],
    datasets: [
      {
        label: 'Desarrollo',
        data: [4, 20 - 4],
        backgroundColor: ['#FF6384', '#E8E8E8'],
        hoverBackgroundColor: ['#FF6384', '#E8E8E8'],
      },
    ],
  };

  const data2 = {
    labels: ['Ingles'],
    datasets: [
      {
        label: 'Ingles',
        data: [15, 20 - 15],
        backgroundColor: ['#4BC0C0', '#E8E8E8'],
        hoverBackgroundColor: ['#4BC0C0', '#E8E8E8'],
      },
    ],
  };

  const data3 = {
    labels: ['Habilidades'],
    datasets: [
      {
        label: 'Habilidades',
        data: [15, 20 - 15],
        backgroundColor: ['#FFCE56', '#E8E8E8'],
        hoverBackgroundColor: ['#FFCE56', '#E8E8E8'],
      },
    ],
  };

  const data4 = {
    labels: ['Riwi'],
    datasets: [
      {
        label: 'Riwi',
        data: [10, 20 - 10],
        backgroundColor: ['#36A2EB', '#E8E8E8'],
        hoverBackgroundColor: ['#36A2EB', '#E8E8E8'],
      },
    ],
  };


  const options = {
    cutout: '70%', // Ajusta el tamaño del agujero
    plugins: {
      legend: {
        display: false, // Ocultar la leyenda
      },
      tooltip: {
        enabled: false, // Ocultar el tooltip
      },
    },
  };

  return (
    <>
      <div className="doughnut-charts">
        <div className="doughnut-chart">
          <Doughnut data={data1} options={options} />
          <div className="centered-text">
            <p className='number'>4</p>
            <p>Desarrollo</p></div>
        </div>
        <div className="doughnut-chart">
          <Doughnut data={data2} options={options} />
          <div className="centered-text"><p></p>
            <p className='number'>15</p>Inglés</div>
        </div>
        <div className="doughnut-chart">
          <Doughnut data={data3} options={options} />
          <div className="centered-text">
            <p className='number'>15</p>
            <p>Habilidades</p>
          </div>
        </div>
        <div className="doughnut-chart">
          <Doughnut data={data4} options={options} />
          <div className="centered-text"><p></p>
            <p className='number'>10</p>Riwi</div>
        </div>
      </div>
    </>
  );
};

export default DoughnutCharts;

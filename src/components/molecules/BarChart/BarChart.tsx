import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './style.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { dashboardAdmin } from '../../../api/adminDashboard';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// realizar la peticion con axios para obtener la info



// Recibir datos (reactivos)
// Para coder, y para perfiles admin 
// crear interfaz para recibir label y data 

const BarChartTotalPoints: React.FC = () => {

  const [clans, setClans] = useState<any[]>([]);
  const { getClans } = dashboardAdmin();

  useEffect(() => {
    const fetchClans = async () => {
      try {
        const clansData = await getClans();
        setClans(clansData);
        console.log(clansData);
      } catch (error) {
        console.error('Error fetching clans:', error);
      }
    };

    fetchClans();
  }, []);
  // console.log(clans)

  // Mapeamos los datos de los clanes para obtener etiquetas y valores
  const labels = clans.map((clan) => clan.name);
  const data = clans.map((clan) => clan.coins);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset',
        data: [60, 20, 20, 30, 1],
        // data: data,
        backgroundColor: ['#6B5CFF', '#EAA2FC', '#302E49', '#E6CA52', '#5ACCA4'],
        borderRadius: 10, // Redondear las esquinas superiores
        borderSkipped: false, // Para que no se omita el borde inferior
        hoverBorderWidth: 3,
        hoverBorderColor: '#000',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'ubuntu', // Cambia la fuente de las etiquetas del eje x
            size: 15, // Cambia el tamaño de la fuente de las etiquetas del eje x
            weight: 500,
          },
          color: "#000",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'ubuntu', // Cambia la fuente de las etiquetas del eje x
            size: 19, // Cambia el tamaño de la fuente de las etiquetas del eje x
          },
        },
      },
    },
  };
  return <Bar data={chartData} options={options} width={510} height={310} className='barchart' />;
};

export default BarChartTotalPoints;



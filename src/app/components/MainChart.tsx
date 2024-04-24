"use client"
import { CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

interface Props {
  pageData: number[];
}

const MainChart = ({ pageData }: Props) => {
//   ChartJS.register(LineElement,CategoryScale, LinearScale,  Title, Tooltip);
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const data = {
    labels: pageData?.slice(0, 4),
    datasets: [
      {
        data: pageData?.slice(0, 4).reverse(),
        borderColor: 'red',
        borderWidth: 2,
        pointRadius: 0,
        backgroundColor: 'transparent',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.6,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="min-w-[550px] min-h-[100%]">
      <Line data={data} options={options} />
      
    </div>
  );
};

export default MainChart;




import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Залишилось', 'Знищених'],
    datasets: [
      {
        label: '% танків',
        data: [25, 75],
        fill: false,
        lineTension: 0.0,
        hoverBackgroundColor: ["#56d7a3", "#fe8a5d"],
        backgroundColor: [
          "#83b1cf",
          "#fdee4B",
        ],
        borderWidth: 0,
        borderRadius: [0, { outerEnd: 30, innerEnd: 30, innerStart: 0, outerStart: 0 }],
        spacing: -7,
        cutout: 110,
        rotation: 273,
      },
    ],
  };

  const options = {
    animation: {
      duration: 5000,
    },
  };

  return (
    <div className='global-container'>
      <div className='chart-item'>
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Dashboard;

// animation: {
//   onComplete: ()=>{
//     console.log("Can no longer click on legend item to hide line");
//   }
// },

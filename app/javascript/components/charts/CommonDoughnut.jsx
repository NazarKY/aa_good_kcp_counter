import React from "react";
import { Doughnut } from "react-chartjs-2";

const totalAtBeginning = {
  pig_dogs: 900000,
  artillery: 5689,
  helicopters: 961,
  aircraft: 1379,
  tanks: 3300,
  apv: 13758
}

const CommonDoughnut = ({ type, destroyed, remains }) => {
  const percentageOfDestroyed = ((destroyed[type]/totalAtBeginning[type])*100).toFixed( 2 )

  const data = {
    labels: [`Destroyed: ${destroyed[type]}`, `Remains: ${remains[type]}`],
    datasets: [
      {
        label: type,
        data: [destroyed[type], remains[type] ],
        fill: false,
        lineTension: 0.0,
        hoverBackgroundColor: [
          "#fe8a5d",
          "#56d7a3"
        ],
        backgroundColor: [
          "#fdee4B",
          "#83b1cf",
        ],
        borderWidth: 0,
        borderRadius: 5,
        cutout: 120,
      },
    ],
  };

  const options = {
    animation: {
      duration: 5000,
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      title: {
        text: type,
        display: true,
        padding: {
          top: 10,
          bottom: 30
        }
      }
    }
  };

  return (
    <div className='chart-item'>
      <div>
        <div className='type-label'>{type}</div>
        <div className='total'>Total was: {totalAtBeginning[type]}</div>
        <div className='percentage'>{percentageOfDestroyed}%</div>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CommonDoughnut;

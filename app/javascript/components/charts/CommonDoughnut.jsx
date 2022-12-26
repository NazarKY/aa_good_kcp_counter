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

const CommonDoughnut = ({ type, destroyed }) => {
  const percentageOfDestroyed = ((destroyed[type]/totalAtBeginning[type])*100).toFixed( 2 )
  const remains = totalAtBeginning[type] - destroyed[type]

  const data = {
    labels: [`Destroyed: ${destroyed[type]}`, `Remains: ${remains}`],
    datasets: [
      {
        label: type,
        data: [destroyed[type], remains],
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
        cutout: 130,
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
          color: '#444444',
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
      <div className='center-legend'>
        <div className='type-label'>{type.replace('_', ' ')}</div>
        <div className='total'>Total was: <span className='total-number'>{totalAtBeginning[type]}</span></div>
        <div className='percentage'>{percentageOfDestroyed}%</div>
      </div>

      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CommonDoughnut;

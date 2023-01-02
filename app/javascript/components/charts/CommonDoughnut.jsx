import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartNames, Basic } from '../i18n/common.jsx'

ChartJS.register(ArcElement, Tooltip, Legend);

const totalAtBeginning = {
  pig_dogs: 900000,
  artillery: 5689,
  helicopters: 961,
  aircraft: 1379,
  tanks: 3300,
  apv: 13758
}

const CommonDoughnut = ({ type, destroyed, previous, language }) => {
  const percentageOfDestroyed = ((destroyed[type]/totalAtBeginning[type])*100).toFixed( 2 );
  const remains = totalAtBeginning[type] - destroyed[type];
  const label = ChartNames[language][type];
  const difference = destroyed[type] - previous[type]

  console.log(ChartNames[language][label])

  const data = {
    labels: [`${Basic[language]['destroyed']} ${destroyed[type]}`, `${Basic[language]['remains']} ${remains}`],
    datasets: [{
      label: label,
      data: [destroyed[type], remains],
      fill: false,
      lineTension: 0.0,
      backgroundColor: ["#fdee4B", "#c6c6c6"],
      borderWidth: 0,
      borderRadius: 5,
      cutout: 140,
    }],
  };

  const options = {
    animation: { duration: 5000 },
    plugins: {
      legend: { labels: { color: '#444444', font: { size: 14, weight: 'bold' } } },
      title: { text: type, display: true, padding: { top: 10, bottom: 30 } }
    }
  };

  return (
    <div className='chart-item'>
      <div className='center-legend'>
        <div className='type-label'>{label}</div>
        <div className='total'>
          {Basic[language]['was_total']} <span className='total-number'>{totalAtBeginning[type]}</span>
        </div>
        <div className='percentage'>{percentageOfDestroyed}%</div>
        <div className='difference'>{difference ? `+${difference}` : ''}</div>
      </div>

      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CommonDoughnut;

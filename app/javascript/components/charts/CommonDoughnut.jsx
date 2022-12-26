import React from "react";
import { Doughnut } from "react-chartjs-2";

const CommonDoughnut = ({ type, destroyed, remains }) => {
  const data = {
    labels: ['Destroyed', 'Remains'],
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
        cutout: 110,
      },
    ],
  };

  const options = {
    animation: {
      duration: 5000,
    },
  };

  console.log(type)
  console.log(remains[type])
  console.log(destroyed[type])

  return (
    <div className='chart-item'>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
}

export default CommonDoughnut;

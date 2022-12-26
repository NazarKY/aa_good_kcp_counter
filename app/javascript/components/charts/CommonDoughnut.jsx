import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const CommonDoughnut = ({ dayData, totalData }) => {
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

  console.log(dayData)
  console.log(totalData)

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

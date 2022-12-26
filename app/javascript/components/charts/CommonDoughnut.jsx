import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const CommonDoughnut = ({ type, destroyed, remains }) => {
  const data = {
    labels: ['Remains', 'Destroyed'],
    datasets: [
      {
        label: type,
        data: [remains[type], destroyed[type]],
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
        rotation: -28,
      },
    ],
  };

  const options = {
    animation: {
      duration: 5000,
    },
  };

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

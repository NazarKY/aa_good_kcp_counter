import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios";
import CommonDoughnut from "./charts/CommonDoughnut";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [dayData, setDayData] = useState({});
  const [totalData, setTotalData] = useState({});

  useEffect(() => {
    getBeginningTotal();
    getTodayStatistic();
  }, []);

  const getBeginningTotal = async () => {
    const url = "/api/v1/day_statistic/index";
    try {
      const response = await axios.get(url);
      setTotalData(response.data);
    } catch(error) {
      console.log(error);
    }
  };

  const getTodayStatistic = async () => {
    const url = "/api/v1/show/1";
    try {
      const response = await axios.get(url);
      setDayData(response.data);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='global-container'>
      <div className='chart-item'>
        <CommonDoughnut
          dayData={dayData}
          totalData={totalData}
        />
      </div>
    </div>
  );
};

export default Dashboard;

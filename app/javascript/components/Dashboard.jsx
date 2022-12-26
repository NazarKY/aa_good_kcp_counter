import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios";
import CommonDoughnut from "./charts/CommonDoughnut";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [destroyed, setDestroyed] = useState({});
  const [remains, setRemains] = useState({});

  useEffect(() => {
    getBeginningTotal();
    getTodayStatistic();
  }, []);

  const getBeginningTotal = async () => {
    const url = "/api/v1/day_statistic/remains";
    try {
      const response = await axios.get(url);
      setRemains(response.data);
    } catch(error) {
      console.log(error);
    }
  };

  const getTodayStatistic = async () => {
    const url = "/api/v1/show/1";
    try {
      const response = await axios.get(url);
      setDestroyed(response.data);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='global-container'>
      <CommonDoughnut type={'tanks'} destroyed={destroyed} remains={remains} />

      <CommonDoughnut type={'apv'} destroyed={destroyed} remains={remains} />
    </div>
  );
};

export default Dashboard;

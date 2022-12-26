import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from "axios";
import CommonDoughnut from "./charts/CommonDoughnut";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [destroyed, setDestroyed] = useState({});

  useEffect(() => {
    getTodayStatistic();
  }, []);

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
    <div className='global-container container text-center'>
      <div className="row">
        <div className="col">
          <CommonDoughnut type={'tanks'} destroyed={destroyed} />
        </div>
        <div className="col">
          <CommonDoughnut type={'pig_dogs'} destroyed={destroyed} />
        </div>
        <div className="col">
          <CommonDoughnut type={'apv'} destroyed={destroyed} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <CommonDoughnut type={'artillery'} destroyed={destroyed} />
        </div>
        <div className="col">
          <CommonDoughnut type={'helicopters'} destroyed={destroyed} />
        </div>
        <div className="col">
          <CommonDoughnut type={'aircraft'} destroyed={destroyed} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

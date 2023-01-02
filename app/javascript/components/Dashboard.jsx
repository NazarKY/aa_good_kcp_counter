import React, { useState, useEffect } from "react";
import axios from "axios";
import CommonDoughnut from "./charts/CommonDoughnut";
import NewDayStatistic from "./modals/NewDayStatistic";

const Dashboard = () => {
  const [destroyed, setDestroyed] = useState({});
  const [showAddNew, setShowAddNew] = useState(false);
  const [previous, setPrevious] = useState({});
  const [language, setLanguage] = useState('ua');

  useEffect(() => {
    getTodayStatistic();
  }, []);

  const handleShowAddNew = () => setShowAddNew(true);
  const handleSetLanguage = () => setLanguage(language == 'ua' ? 'en' : 'ua')

  const getTodayStatistic = async () => {
    const url = "/api/v1/show/1";
    try {
      const response = await axios.get(url);
      setDestroyed(response.data.current);
      setPrevious(response.data.previous)
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='global-container container text-center'>
      <div className='menu-bar'>
        <button type="button" className="btn btn-outline-warning btn-lang" onClick={handleSetLanguage}>
          { language == 'ua' ? 'en' : 'ua' }
        </button>
        <button type="button" className="btn btn-outline-warning" onClick={handleShowAddNew}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="row">
        <div className="col">
          <CommonDoughnut type={'tanks'} destroyed={destroyed} previous={previous} language={language} />
        </div>
        <div className="col">
          <CommonDoughnut type={'pig_dogs'} destroyed={destroyed} previous={previous} language={language} />
        </div>
        <div className="col">
          <CommonDoughnut type={'apv'} destroyed={destroyed} previous={previous} language={language} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <CommonDoughnut type={'artillery'} destroyed={destroyed} previous={previous} language={language} />
        </div>
        <div className="col">
          <CommonDoughnut type={'helicopters'} destroyed={destroyed} previous={previous} language={language} />
        </div>
        <div className="col">
          <CommonDoughnut type={'aircraft'} destroyed={destroyed} previous={previous} language={language} />
        </div>
      </div>

      <NewDayStatistic show={showAddNew} setShow={setShowAddNew} setNewDestroyed={setDestroyed} />
    </div>
  );
};

export default Dashboard;

import React, { useState }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const url = "/api/v1/day_statistic/create";

const NewDayStatistic = ({ show, setShow, setNewDestroyed }) => {
  const [newDayStatistic, setNewDayStatistic] = useState({});

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setNewDayStatistic({
      ...newDayStatistic,
      [e.target.id]: e.target.value
    })
  };

  const saveNewDayStatistic = async () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;

    try {
      const response = await axios.post(url, newDayStatistic,
        { headers: { "X-CSRF-Token": token, "Content-Type": "application/json" } }
      );
      handleClose();
      setNewDestroyed(response.data);
      console.log(response.data);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Day Statistic</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="pig_dogs" onChange={handleChange} />
          <label htmlFor="pigDogs">PigDogs</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="tanks" onChange={handleChange} />
          <label htmlFor="tanks">Tanks</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="apv" onChange={handleChange} />
          <label htmlFor="apv">APV</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="artillery" onChange={handleChange} />
          <label htmlFor="artillery">Artillery</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="mlrs" onChange={handleChange} />
          <label htmlFor="mlrs">MLRS</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="aircraft" onChange={handleChange} />
          <label htmlFor="aircraft">Aircraft</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="helicopters" onChange={handleChange} />
          <label htmlFor="helicopters">Helicopters</label>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
        <Button variant="outline-primary" onClick={saveNewDayStatistic}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default NewDayStatistic;

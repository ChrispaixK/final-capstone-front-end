import React, { useState } from 'react';
import '../assets/App.css';
import '../assets/addcar.css';

function AddCar() {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setModel('');
    setBrand('');
    setReleaseDate('');
    setColor('');
    setPrice('');
    console.log(
      'car added successfully!',
      '\n',
      'CAR INFOS :',
      '\n',
      brand,
      '\n',
      model,
      '\n',
      releaseDate,
      '\n',
      color,
      '\n',
      price,
    );
  };
  return (
    <div className="content">
      <div className="add-car">
        <div className="add-form">
          <h2>Add a car</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Brand ..."
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              type="text"
              placeholder="Model ..."
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Release date ..."
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Color ..."
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price ..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add car</button>
          </form>
        </div>
        <div className="form-aside">
          <img
            src="https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png"
            alt="aside"
          />
        </div>
      </div>
    </div>
  );
}

export default AddCar;
import React from 'react';

const CarCard = ({ car, onClick }) => {
  return (
    <div className="border rounded p-4 cursor-pointer" onClick={() => onClick(car)}>
      <img src={car.photo} alt={car.model} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-xl font-bold">{car.model}</h2>
      <p>{car.year}</p>
      <p>{car.value}</p>
      <p>{car.type === 'venda' ? 'À venda' : 'Para locação'}</p>
    </div>
  );
};

export default CarCard;

import React from 'react';

const CarDetailsModal = ({ car, onClose, onPurchase }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center text-black ">
      <div className="bg-white p-4 rounded">
        <h2 className="text-2xl font-bold mb-2">{car.model}</h2>
        <img src={car.photo} alt={car.model} className="w-full h-60 object-cover mb-2" />
        <p>{car.year}</p>
        <p>{car.value}</p>
        <p>{car.type === 'venda' ? 'À venda' : 'Para locação'}</p>
        <p className="my-4">{car.description}</p>
        <button className="bg-red-500 text-white p-2 rounded mr-2" onClick={onClose}>Fechar</button>
        <button className="bg-green-500 text-white p-2 rounded" onClick={onPurchase}>Comprar/Alugar</button>
      </div>
    </div>
  );
};

export default CarDetailsModal;

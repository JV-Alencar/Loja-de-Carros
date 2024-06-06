import React, { useState } from 'react';
import CarCard from './CarCard';
import CarDetailsModal from './CarDetailsModal';
import PurchaseFormModal from './PurchaseFormModal';

const CarGallery = ({ cars }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isPurchase, setIsPurchase] = useState(false);

  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
    setIsPurchase(false);
  };

  const handlePurchaseClick = () => {
    setIsPurchase(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard key={car.code} car={car} onClick={handleCardClick} />
        ))}
      </div>

      {selectedCar && !isPurchase && (
        <CarDetailsModal car={selectedCar} onClose={handleCloseModal} onPurchase={handlePurchaseClick} />
      )}

      {selectedCar && isPurchase && (
        <PurchaseFormModal car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CarGallery;

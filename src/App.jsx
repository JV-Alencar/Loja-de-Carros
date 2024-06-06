import React, { useState } from 'react';
import cars from './data';
import CarGallery from './components/CarGallery';

function App() {
  const [filter, setFilter] = useState('todos');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCars = cars.filter((car) => {
    if (filter === 'todos') return true;
    return car.type === filter;
  });

  const featuredCars = filteredCars.filter(car => car.featured);
  const otherCars = filteredCars.filter(car => !car.featured);

  return (
    <div className="p-4 inline-block">
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h1 className="text-3xl font-bold mb-4">Carros Super</h1>
      </div>
      <div className="mb-4">
        <label className="mr-2">Filtro:</label>
        <select value={filter} onChange={handleFilterChange} className="border p-2 rounded text-black">
          <option value="todos">Todos</option>
          <option value="venda">À venda</option>
          <option value="locação">Para locação</option>
        </select>
      </div>

      <h2 className="text-2xl font-bold mb-4">Carros em Destaque</h2>
      <CarGallery cars={featuredCars} />

      <h2 className="text-2xl font-bold mt-8 mb-4">Outros Carros</h2>
      <CarGallery cars={otherCars} />
    </div>
  );
}

export default App;

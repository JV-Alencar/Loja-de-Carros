import React, { useState } from 'react';

const PurchaseFormModal = ({ car, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Processar a compra
    alert(`Compra feita para o carro ${car.model} por ${name}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center text-black">
      <div className="bg-white p-4 rounded">
        <h2 className="text-2xl font-bold mb-2">Compra do {car.model}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Nome</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Telefone</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">E-mail</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">Finalizar Compra</button>
        </form>
        <button className="bg-red-500 text-white p-2 rounded mt-4" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default PurchaseFormModal;

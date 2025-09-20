import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import BrokerSelect from './components/BrokerSelect';
import BrokerForm from './components/BrokerForm';
import './App.css';

function App() {
  // Estado das Corretoras
  const [brokers, setBrokers] = useState([]);
 // Estado da Corretora Selecionada
 const [activeBrokerId, setActiveBrokerId] = useState('');

 // Carregar corretoras do localStorage ao montar o componente
  useEffect(() => {
    const stored = localStorage.getItem('dtm_brokers');
    if(stored){
      const brokersArr = JSON.parse(stored);
      setBrokers(brokersArr);
      // Seleciona a corretora ativa do localStorage ou a primeira da lista
      const active = localStorage.getItem('dtm_activeBrokerId') || (brokersArr[0]?.id ?? '');
      setActiveBrokerId(active);
    }
  }, []);
  // Atualiza corretora ativa no localStorage
  useEffect(() => {
    if(activeBrokerId){
      localStorage.setItem('dtm_activeBrokerId', activeBrokerId);
    }
  }, [activeBrokerId]);

  // Função para adicionar corretora
  const handleAddBroker = (broker) => {
    const updatedBrokers = [...brokers, broker];
    setBrokers(updatedBrokers);
    localStorage.setItem('dtm_brokers', JSON.stringify(updatedBrokers));
    setActiveBrokerId(broker.id);
    localStorage.setItem('dtm_activeBrokerId', broker.id);
  };

  const activeBroker = brokers.find(b => b.id === activeBrokerId);

  return(
    <div className="container">
      <div className='header'>
      <h1>📈 Day Trade Manager</h1>
      <p>Gerencie suas operações de day trade com facilidade.</p>
      </div>
      {/* Adicione os outros componentes aqui */}
      <BrokerSelect 
        brokers={brokers} 
        activeBrokerId={activeBrokerId} 
        onChange={setActiveBrokerId} />
        <Dashboard broker={activeBroker} />
        <BrokerForm onAddBroker={handleAddBroker} />
        
      </div>
  );
}

export default App;
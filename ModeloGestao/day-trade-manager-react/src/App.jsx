import React, { useState, useEffect } from 'react';
import BrokerSelect from './components/BrokerSelect';
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

  return(
    <div className="container">
      <div className='header'>
      <h1>📈 Day Trade Manager</h1>
      <p>Gerencie suas operações de day trade com facilidade.</p>
      </div>
      <BrokerSelect 
        brokers={brokers} 
        activeBrokerId={activeBrokerId} 
        onChange={setActiveBrokerId} />
      </div>
  );
}

export default App;
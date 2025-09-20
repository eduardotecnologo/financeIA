import React from 'react';

type Broker = {
  initialDeposit: number;
  // Adicione outras propriedades conforme necessário
};

interface DashboardProps {
  broker?: Broker;
}

function Dashboard({ broker }: DashboardProps) {
  if (!broker) {
    return (
      <div className="card">
        <h2>Resumo da Corretora</h2>
        <p>Nenhuma corretora selecionada.</p>
      </div>
    );
  }

  // Exemplo de dados fictícios, substitua pelos reais conforme migrar operações
  const saldo = broker.initialDeposit;
  const lucro = 0; // Substitua pela soma dos lucros das operações
  const prejuizo = 0; // Substitua pela soma dos prejuízos
  const totalOperacoes = 0; // Substitua pela contagem de operações

  return (
    <div className="card">
      <h2>Resumo da Corretora</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Saldo Atual</h3>
          <div className="value">R$ {saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
        </div>
        <div className="stat-card">
          <h3>Lucro</h3>
          <div className="value profit">R$ {lucro.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
        </div>
        <div className="stat-card">
          <h3>Prejuízo</h3>
          <div className="value loss">R$ {prejuizo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
        </div>
        <div className="stat-card">
          <h3>Total de Operações</h3>
          <div className="value">{totalOperacoes}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
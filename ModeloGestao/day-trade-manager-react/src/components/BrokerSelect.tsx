import React, {useEffect, useState} from 'react';

type Broker = {
    id: string | number;
    name: string;
    initialDeposit: number;
};

type BrokerSelectProps = {
    brokers: Broker[];
    activeBrokerId: string | number | null;
    onChange: (brokerId: string | number) => void;
};

function BrokerSelect({brokers, activeBrokerId, onChange}: BrokerSelectProps) 
{
    return(
        <div className='card'>
            <h2>🏢 Corretora Ativa</h2>
            <div className='form-row'>
                <div>
                    <label htmlFor="brokerSelect">Selecionar Corretora:</label>
                    <select 
                        id="brokerSelect"
                        value={activeBrokerId || ''}
                        onChange={e => onChange(e.target.value)}>
                            {brokers.length === 0 ? (
                                <option value="" disabled>Nenhuma corretora disponível</option>
                            ): brokers.map(broker => (
                                <option key={broker.id} value={broker.id}>
                                    {broker.name} - R$ {Number(broker.initialDeposit).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default BrokerSelect;
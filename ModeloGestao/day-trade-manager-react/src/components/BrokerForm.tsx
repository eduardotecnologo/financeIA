import React, { useState } from 'react';

interface Broker {
    id: string;
    name: string;
    initialDeposit: number;
}

interface BrockerFormProps {
    onAddBroker: (broker: Broker) => void;
}

function BrockerForm({ onAddBroker }: BrockerFormProps) {
    const [name, setName] = useState('');
    const [initialDeposit, setInitialDeposit] = useState('');

    const handlerSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(!name || !initialDeposit) return;
        onAddBroker({ 
            id: Date.now().toString(),
            name,
            initialDeposit: parseFloat(initialDeposit)
            });
            setName('');
        setInitialDeposit('');
    };

    return(
        <div className='card'>
            <h2>Adicionar Corretora</h2> 
            <form onSubmit={handlerSubmit}>
                <div className='form-row'>
                <div>
                    <label>Nome da Corretora:</label>
                    <input 
                        type="text" 
                        id="brokerName" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        required/>
                    </div>
                    <div>
                        <label>Depósito Inicial:</label>
                        <input 
                            type="number"  
                            value={initialDeposit} 
                            onChange={e => setInitialDeposit(e.target.value)} 
                            required
                            min="0"
                            step="0.01" />
                    </div>
                </div>
                <button type="submit">Adicionar Corretora</button>
            </form>
        </div>
    );
}
/**
 * `BrockerForm` is a React component responsible for rendering a form interface
 * for broker-related data input and management within the application.
 *
 * @component
 * @example
 * ```tsx
 * <BrockerForm />
 * ```
 *
 * @remarks
 * Ensure that all necessary props and context providers are supplied for correct functionality.
 */
export default BrockerForm;
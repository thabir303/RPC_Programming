//src/components/FactorialInput.jsx
import  { useState } from 'react';
import RPCClient from '../client';

const FactorialInput = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleRequest = async () => {
        const rpcClient = new RPCClient('http://10.100.201.33:4000/factorial/calculate');
        try {
            const res = await rpcClient.invoke('factorial', parseInt(input));
            setResult(res.result);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

    return (
        <div className="container">
            <h1>Factorial Calculator (RPC Client)</h1>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a number"
            />
            <button onClick={handleRequest}>Calculate</button>
            {result !== null && <p>Result: {result}</p>}
            {error && <p className="error">Error: {error}</p>}
        </div>
    );
};

export default FactorialInput;
const axios = require('axios');

exports.handleRPC = async (req, res) => {
    const { jsonrpc, method, params, id } = req.body;

    try {
        if (method === 'factorial') {
            const response = await axios.post('http://localhost:4000/factorial/calculate', {
                number: params[0],
            });
            res.json({ jsonrpc: '2.0', result: response.data.result, id });
        } else {
            res.status(400).json({ jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id });
        }
    } catch (error) {
        res.json({
            jsonrpc: '2.0',
            error: { code: -32000, message: error.message },
            id,
        });
    }
};

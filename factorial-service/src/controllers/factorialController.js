//src/controllers/factorialController.js
exports.calculateFactorial = (req, res) => {
    const { number } = req.body;

    if (typeof number !== 'number' || number < 0) {
        return res.status(400).json({ error: 'Number must be a non-negative integer' });
    }

    const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
    res.json({ result: factorial(number) });
};

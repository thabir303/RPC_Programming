const app = require('./app');

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Factorial Service running on http://localhost:${PORT}`);
});
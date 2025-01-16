const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`RPC Gateway running on http://localhost:${PORT}`);
});

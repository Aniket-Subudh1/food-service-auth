import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to authentication');
});

export default app;

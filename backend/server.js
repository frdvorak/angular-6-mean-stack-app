import express from 'express';

const app = express();
app.get('/', (reg, res) => res.send('Hello World!'));

app.listen(4000, () => console.log('Express server is running on port 4000'));
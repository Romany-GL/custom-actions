import { Request, Response } from 'express';

const axios = require('axios');

const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

app.get('/api', async (req: Request, res: Response) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

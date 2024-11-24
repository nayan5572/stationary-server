/* eslint-disable @typescript-eslint/no-require-imports */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
require('dotenv').config();

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Running');
});

export default app;

/* eslint-disable @typescript-eslint/no-require-imports */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/routes/product.routes';
import { orderRouter } from './app/routes/order.routes';
// import { orderRoute } from './app/routes/order.routes';
require('dotenv').config();

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Running');
});

export default app;

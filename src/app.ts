import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/routes/product.routes';
import { orderRouter } from './app/routes/order.routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', orderRouter);

const getAController = (req: Request, res: Response) => {
  res.send('Server is running');
};

app.get('/', getAController);

export default app;

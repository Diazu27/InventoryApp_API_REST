import express, {json} from 'express';
import morgan from 'morgan'; 


//import routes
import productRoutes from './routes/productRoutes'
import categoriesRoutes from './routes/categoriesRoutes';
import stockRoutes from './routes/stockRoutes';

//Init API
const app = express();

//Midlewares
app.use(morgan('dev'));
app.use(json());
 
//Set routes
app.use('/api', productRoutes);
app.use('/api/categories', categoriesRoutes)
app.use('/api/stock', stockRoutes)

export default app;



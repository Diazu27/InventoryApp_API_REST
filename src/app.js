import express, {json} from 'express';
import morgan from 'morgan'; 


//import routes
import productRoutes from './routes/productRoutes'
import categoriesRoutes from './routes/categoriesRoutes';
;


//Init API
const app = express();

//Midlewares
app.use(morgan('dev'));
app.use(json());

//Set routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoriesRoutes)

export default app;



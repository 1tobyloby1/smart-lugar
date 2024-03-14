import express, { Express } from "express";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger';
import cabinRoutes from "./routes/cabinRoutes";
import mapRoutes from "./routes/mapRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 80;

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/mapping', mapRoutes);
app.use('/cabin', cabinRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
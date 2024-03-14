import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger';
import userRouter from "./routes/userRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 80;

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
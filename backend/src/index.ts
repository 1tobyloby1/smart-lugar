import express, { Express } from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../swagger";
import cabinRoutes from "./routes/cabinRoutes";
import mapRoutes from "./routes/mapRoutes";
import cors from "cors";
import listenToNode from "./routes/listenToNode";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config();
}

const app: Express = express();
const port = process.env.PORT || 80;

app.use(cors());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/mapping", mapRoutes);
app.use("/cabin", cabinRoutes);

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

listenToNode(server);
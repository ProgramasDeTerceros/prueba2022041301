import express from "express";
import { routerApi } from "./routes";
import cors from "cors";
import { environment } from "./config/environment";
import mongoose from "mongoose";

// MongoDB connection
mongoose.connect(environment.mongodb.uri);
const db = mongoose.connection;

// On connection error
db.on("error", (error) => {
  console.log("Database error: ", error);
});

// On successful connection
db.on("connected", () => {
  console.log("Connected to database");
});

const app: express.Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());
routerApi(app);
app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});

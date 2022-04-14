import express from "express";
import { routerApi } from "./routes";
import cors from "cors";

const app: express.Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());
routerApi(app);

app.listen(port, () => {
  return console.log(`http://localhost:${port}`);
});

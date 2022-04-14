import express from "express";
import { partidoRouter } from "./partidoRouter";

const url = "/api/v1/";

export function routerApi(app) {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("--- hola ---");
  });

  const router = express.Router();
  app.use("/api/v1", router);
  router.use(`/partido`, partidoRouter);
}

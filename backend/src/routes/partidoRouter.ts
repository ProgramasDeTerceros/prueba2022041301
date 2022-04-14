import express from "express";
import { RespModel } from "../shared/models/resp-model";
import { PartidoController } from "../Controllers/partidoController";

const router = express.Router();

router.get(`/`, (req: express.Request, res: express.Response) => {
  const resp = new RespModel(200, "");
  PartidoController.getList(req, resp);
  res.status(resp.code).send(resp);
});

router.get(`/:id`, (req: express.Request, res: express.Response) => {
  const resp = new RespModel(200, "");
  PartidoController.get(req, resp);
  res.status(resp.code).send(resp);
});

export { router as partidoRouter };

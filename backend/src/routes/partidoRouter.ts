import express from "express";
import { RespModel } from "../shared/models/resp-model";
import { PartidoController } from "../Controllers/partidoController";

const router = express.Router();

router.get(`/`, (req: express.Request, res: express.Response) => {
  const resp = new RespModel(200, "");
  PartidoController.getList(req, resp)
    .then(() => {
      res.status(resp.code).send(resp);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get(`/:id`, (req: express.Request, res: express.Response) => {
  const resp = new RespModel(200, "");
  PartidoController.get(req, resp)
    .then(() => {
      res.status(resp.code).send(resp);
    })
    .catch((err) => {
      console.error(err);
    });
});

export { router as partidoRouter };

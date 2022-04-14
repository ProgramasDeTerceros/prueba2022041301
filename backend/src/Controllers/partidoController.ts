import { PartidoModel } from "../shared/models/partido-model";
import { RespModel } from "../shared/models/resp-model";
import express from "express";
export class PartidoController {
  private static areaTest: PartidoModel[] = [
    {
      id: 1,
      status: "1",
      homeTeam: { id: 1, name: "11" },
      awayTeam: { id: 2, name: "22" },
    },
    {
      id: 2,
      status: "2",
      homeTeam: { id: 1, name: "11" },
      awayTeam: { id: 2, name: "2222" },
    },
    {
      id: 3,
      status: "3",
      homeTeam: { id: 1, name: "2222" },
      awayTeam: { id: 2, name: "111" },
    },
  ];
  public static getList = (req: express.Request, res: RespModel): void => {
    res.data = this.areaTest;
  };

  public static get = (req: express.Request, res: RespModel): void => {
    const { id } = req.params;
    if (!id) {
      res.code = 404;
      res.message = "Bad Request";
      return;
    }
    res.data = this.areaTest.find((x) => x.id == id);
  };

  public static post = (req: express.Request, res: RespModel): void => {
    const body = req.body;
    res.data = body;
  };
}

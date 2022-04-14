import {
  PartidoModel,
  PartidoDb,
  partidoGetID,
} from "../shared/models/partido-model";
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
  public static getList = async (req: express.Request, res: RespModel) => {
    let result = await this.Get();
    console.log(result);
    res.data = result;
    return;
  };

  public static get = async (req: express.Request, res: RespModel) => {
    const { id } = req.params;
    if (!id) {
      res.code = 404;
      res.message = "Bad Request";
      return;
    }
    let result = await this.GetByID(id);
    console.log(result);
    res.data = result;
    return;
  };

  private static Get = () => {
    return PartidoDb.find({})
      .exec()
      .then((someValue) => {
        //console.log(someValue);
        return someValue;
      })
      .catch((err) => {
        return "error occured";
      });
  };
  private static GetByID = (id) => {
    return PartidoDb.findOne({ id })
      .exec()
      .then((someValue) => {
        //console.log(someValue);
        return someValue;
      })
      .catch((err) => {
        return "error occured";
      });
  };

  private static create = (partido) => {
    let newPartido = new PartidoDb();
    newPartido.id = partido.id;
    newPartido.status = partido.status;
    newPartido.homeTeam = partido.homeTeam;
    newPartido.awayTeam = partido.awayTeam;
    return newPartido.save();
  };

  public static post = (req: express.Request, res: RespModel): void => {
    const body = req.body;
    res.data = body;
  };

  public static index = (id) => {
    return PartidoDb.findById(id);
  };
  public static new = () => {};
}

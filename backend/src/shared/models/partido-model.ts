import { EquipoModel } from "./equipo-model";
import mongoose from "mongoose";
class PartidoModel {
  constructor(
    public id: number,
    public status: string,
    public homeTeam: EquipoModel,
    public awayTeam: EquipoModel
  ) {}
}
const EquipoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const PartidoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  homeTeam: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  awayTeam: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
const partido = mongoose.model("partido", PartidoSchema);
const get = function (callback, limit) {
  partido.find(callback).limit(limit);
};

const getID = function (id) {
  partido.findById(2, function (err, partido) {
    if (err) {
      return null;
    }
    return partido;
  });
};

const nuevo = function (callback, limit) {
  partido.find(callback).limit(limit);
};

export {
  PartidoModel,
  partido as PartidoDb,
  get as partidoGet,
  getID as partidoGetID,
};

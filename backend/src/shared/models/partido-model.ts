import { EquipoModel } from "./equipo-model";

export class PartidoModel {
  constructor(
    public id: number,
    public status: string,
    public homeTeam: EquipoModel,
    public awayTeam: EquipoModel
  ) {}
}

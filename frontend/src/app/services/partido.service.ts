import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { PartidoModel } from "../shared/models/partido-model";
import { RespModel } from "../shared/models/resp-model";
import { ApiServerService } from "./api-server.service";

@Injectable({
  providedIn: "root",
})
export class PartidoService {
  constructor(private _api: ApiServerService, private _router: Router) {}

  private _urlA: String = "partido";

  getList(c: number): Observable<PartidoModel[]> {
    return this._api.GetQuery(`${this._urlA}`).pipe(
      map((data: RespModel) => {
        return <Array<PartidoModel>>data.data;
      })
    );
  }

  get(id: number): Observable<PartidoModel> {
    return this._api.GetQuery(`${this._urlA}/${id}`).pipe(
      map((data: RespModel) => {
        return <PartidoModel>data.data;
      })
    );
  }

  routeList() {
    this._router.navigate(["/partido"]);
  }

  routeSee(id: number) {
    this._router.navigate(["/partido", id]);
  }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { RespModel } from "../shared/models/resp-model";

@Injectable({
  providedIn: "root",
})
export class ApiServerService {
  private _server = "http://localhost:3000";
  private _url = this._server + "/api/v1/";

  constructor(private _http: HttpClient) {}

  GetQuery(query: string): Observable<RespModel> {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this._http.get(`${this._url}${query}`, { headers: header }).pipe(
      map((data: any) => {
        return data || new RespModel(500, "");
      })
    );
  }

  PostQuery(query: string, data: any): Observable<RespModel> {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this._http
      .post(`${this._url}${query}`, data, { headers: header })
      .pipe(
        map((data: any) => {
          return data || new RespModel(500, "");
        })
      );
  }

  PutQuery(query: string, data: any): Observable<RespModel> {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this._http
      .put(`${this._url}${query}`, data, { headers: header })
      .pipe(
        map((data: any) => {
          return data || new RespModel(500, "");
        })
      );
  }

  DeleteQuery(query: string): Observable<RespModel> {
    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this._http.delete(`${this._url}${query}`, { headers: header }).pipe(
      map((data: any) => {
        return data || new RespModel(500, "");
      })
    );
  }
}

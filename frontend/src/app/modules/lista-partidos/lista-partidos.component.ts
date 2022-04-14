import { Component, OnInit } from "@angular/core";
import { PartidoService } from "src/app/services/partido.service";
import { PartidoModel } from "src/app/shared/models/partido-model";

@Component({
  selector: "app-lista-partidos",
  templateUrl: "./lista-partidos.component.html",
  styleUrls: ["./lista-partidos.component.css"],
})
export class ListaPartidosComponent implements OnInit {
  public partidos: PartidoModel[] = [];
  constructor(private _partidosService: PartidoService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._partidosService.getList(0).subscribe(
      (res) => {
        this.partidos = res;
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}

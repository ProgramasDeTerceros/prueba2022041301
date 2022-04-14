import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PartidoService } from "src/app/services/partido.service";
import { PartidoModel } from "src/app/shared/models/partido-model";

@Component({
  selector: "app-table-partidos",
  templateUrl: "./table-partidos.component.html",
  styleUrls: ["./table-partidos.component.css"],
})
export class TablePartidosComponent implements OnInit {
  @Input() data?: PartidoModel[];
  @Output() onReload: EventEmitter<string>;
  constructor(private _partidos: PartidoService) {
    this.onReload = new EventEmitter();
  }

  ngOnInit(): void {}

  selectItem(id: number) {
    this._partidos.routeSee(id);
  }
}

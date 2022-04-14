import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PartidoService } from "src/app/services/partido.service";
import { PartidoModel } from "src/app/shared/models/partido-model";

@Component({
  selector: "app-see-partido",
  templateUrl: "./see-partido.component.html",
  styleUrls: ["./see-partido.component.css"],
})
export class SeePartidoComponent implements OnInit {
  public partido?: PartidoModel;
  constructor(
    private _partidoService: PartidoService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._partidoService.get(params["id"]).subscribe(
        (res) => {
          this.partido = res;
          console.log(res);
        },
        (err) => {
          console.log(err.error);
        }
      );
    });
  }
}

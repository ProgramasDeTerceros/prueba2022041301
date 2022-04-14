import { Component, Input, OnInit } from '@angular/core';
import { PartidoModel } from 'src/app/shared/models/partido-model';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  @Input() public data?: PartidoModel;
  constructor() { }

  ngOnInit(): void {
  }

}

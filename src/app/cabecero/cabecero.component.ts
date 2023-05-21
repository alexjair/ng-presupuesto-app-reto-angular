import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  constructor() { }

  @Input() vPresupDisponible: number = 0;
  @Input() vIngresoTotal: number = 0;
  @Input() vEgresoTotal: number = 0;
  @Input() vEgresoProcentaje: number = 0;

  ngOnInit(): void {
  }

}

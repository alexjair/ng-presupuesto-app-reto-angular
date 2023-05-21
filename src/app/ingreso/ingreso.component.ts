import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../interfaces/ingreso';
import { IngresoService } from '../services/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  constructor(
    private ingresoService:IngresoService,
  ) { }

  dtIngreso:Ingreso[] = [];

  funEliminarRegistro(row: Ingreso){
    console.log("eliminar",row);
    this.ingresoService.funEliminar(row);
  }

  ngOnInit(): void {
    this.dtIngreso = this.ingresoService.dataIngreaso;
  }

}

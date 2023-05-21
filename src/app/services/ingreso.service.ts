import { Injectable } from '@angular/core';
import { Ingreso } from '../interfaces/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  constructor() { }

  dataIngreaso: Ingreso[] = [
    {
      descripcion: "Salario",
      valor: 4000,
    },{
      descripcion: "Venta Coche",
      valor: 500,
    }
  ]

  funEliminar(row: Ingreso){
    const indice: number = this.dataIngreaso.indexOf(row);
    this.dataIngreaso.splice(indice,1);
  }

}

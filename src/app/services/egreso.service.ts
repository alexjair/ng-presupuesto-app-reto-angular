import { Injectable } from '@angular/core';
import { Egreso } from '../interfaces/egreso';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  constructor() { }

  dataIngreaso: Egreso[] = [
    {
      descripcion: "Renta Depto",
      valor: 900,
    },{
      descripcion: "Ropa",
      valor: 200,
    }
  ]

  funEliminar(row: Egreso){
    const indice: number = this.dataIngreaso.indexOf(row);
    this.dataIngreaso.splice(indice,1);
  }

}

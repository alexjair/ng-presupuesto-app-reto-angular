import { Injectable } from '@angular/core';
import { Egreso } from '../interfaces/egreso';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  constructor() { }

  dataEgreso: Egreso[] = [
    {
      descripcion: "Renta Depto",
      valor: 900,
    },{
      descripcion: "Ropa",
      valor: 200,
    }
  ]

  funEliminar(row: Egreso){
    const indice: number = this.dataEgreso.indexOf(row);
    this.dataEgreso.splice(indice,1);
  }

}

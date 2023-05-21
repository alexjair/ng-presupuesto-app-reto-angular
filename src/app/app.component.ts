import { Component } from '@angular/core';
import { Ingreso } from './interfaces/ingreso';
import { Egreso } from './interfaces/egreso';
import { IngresoService } from './services/ingreso.service';
import { EgresoService } from './services/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ingresoService:IngresoService,
    private egresoService:EgresoService,
  ){
    this.dataIngreso = ingresoService.dataIngreaso;
    this.dataEgreso = egresoService.dataIngreaso;
  }

  title = 'ng-presupuesto-app-reto';
  dataIngreso: Ingreso[] = [];
  dataEgreso: Egreso[] = [];

  funCalcularIngresoTotal(){
    let total: number = 0;
    this.dataIngreso.forEach(item =>{
      total = total + Number(item.valor);
    });
    return total;
  }

  funCalcularEgresoTotal(){
    let total: number = 0;
    this.dataEgreso.forEach(item =>{
      total = total + Number(item.valor);
    });
    return total;
  }

  funProcentajeTotal(){
    return this.funCalcularEgresoTotal()/this.funCalcularIngresoTotal()*100;
  }

  funPresupuestoDisponible(){
    return this.funCalcularIngresoTotal() - this.funCalcularEgresoTotal();
  }

}

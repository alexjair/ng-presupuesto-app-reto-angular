import { Component, Input, OnInit } from '@angular/core';
import { EgresoService } from '../services/egreso.service';
import { Egreso } from '../interfaces/egreso';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  constructor(
    private egresoService: EgresoService
  ) { }

  @Input() vIngresoTotal: number = 0;
  dtEgreso: Egreso[] = [];

  funEliminarRegistro(row: Egreso){
    console.log("eliminar",row);
    this.egresoService.funEliminar(row);
  }

  funProcentajeEgreso(vValor : number){
    //console.log("funProcentajeEgreso",vValor);
    //console.log("funProcentajeEgreso",this.vIngresoTotal);
    return vValor/this.vIngresoTotal*100;
  }

  ngOnInit(): void {
    this.dtEgreso = this.egresoService.dataIngreaso;
  }



}

import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../services/ingreso.service';
import { EgresoService } from '../services/egreso.service';
import { Ingreso } from '../interfaces/ingreso';
import { Egreso } from '../interfaces/egreso';
//formularios
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor(
    private ingresoService:IngresoService,
    private egresoService:EgresoService,
    private frm: FormBuilder,
  ) {
    //Construir los campos de la tarea
    this.frmPresupuesto = this.frm.group({
      txtDescripcion: ['Descripcion Gasto',Validators.required],
      txtValor: ['Descripcion Gasto',Validators.required]
    });
  }
  frmPresupuesto: FormGroup;
  txtDescripcion:string='';
  txtValor:number=0;
  vTipoValor = 'vTipoIngreso';

  funTipoOperation(e:any){
    console.log('funTipoOperation()',e.target.value);
    this.vTipoValor = e.target.value;
  }

  funRegistrarValor(){
    //console.log(this.frmPresupuesto.valid);
    //console.log(this.frmPresupuesto);
    if(this.frmPresupuesto.invalid){
      console.log(this.frmPresupuesto.controls);
      alert("Error al ingreso de Información");
    }else{
      console.log('funRegistrarValor()');
      if(this.vTipoValor == 'vTipoIngreso'){
        let objNew:Ingreso[] = [{
            descripcion: this.txtDescripcion,
            valor: this.txtValor
        }];
        console.log('vTipoIngreso',objNew);
        console.log(this.ingresoService.dataIngreaso);
        //this.ingresoService.dataIngreaso = this.ingresoService.dataIngreaso.concat(objNew);
        this.ingresoService.dataIngreaso.push(objNew[0]);
        console.log(this.ingresoService.dataIngreaso);

      }else{
        let objNew:Egreso[] = [{
          descripcion: this.txtDescripcion,
          valor: this.txtValor
        }];
        console.log('vTipoEgreso',objNew);
        this.egresoService.dataEgreso.push(objNew[0]);
      }
      this.txtDescripcion='';
      this.txtValor= 0;
    }
  }

  ngOnInit(): void {

  }

}

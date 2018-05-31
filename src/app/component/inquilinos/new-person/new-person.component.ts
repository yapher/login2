import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {IMyDpOptions} from 'mydatepicker';

// importar servicio
import {ServiceInquilinoService} from '../../../services/service-inquilino.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styles: []
})
export class NewPersonComponent  {

  item;

  constructor(private crudPersonas:ServiceInquilinoService, private router : Router) { 
    this.item = {apellido: null, nombre:null};
  }

  guardarPersona(){
    let formData = new FormData();
    formData.append('apellido', this.item.apellido);
    formData.append('nombre', this.item.nombre);
    formData.append('documento', this.item.documento);
    formData.append('mail', this.item.mail);
    formData.append('telefono_particular', this.item.telefono_particular);
    formData.append('telefono_celular', this.item.telefono_celular);
    formData.append('domicilio', this.item.domicilio);
    
    this.crudPersonas.guardarPersona(formData)
    .map((response) => response.json())
    .subscribe(
      (data) => {
        if(data === true){
          this.router.navigate(['listado']);
        }else{
          console.warn(data);
        }
      }, 
      (error) => console.log(error)
    );
  }


}

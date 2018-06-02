import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

// importar servicio
import {ServiceInquilinoService} from '../../../services/service-inquilino.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

filterargs;
documentos;
listado;
items;
itemsel;

constructor(private crudInquilino: ServiceInquilinoService, private slim: SlimLoadingBarService) {}

ngOnInit() {
  this.listarPersonas();
  this.slim.start();
}

listarPersonas() {
  this.slim.stop();
  this.crudInquilino.listarPersonas()
  .map((response) => response.json())
  .subscribe((data) => {
    this.listado = data;
    this.slim.complete();
  });
}

confirmacion(item: any) {
  console.log('Vamo a elimina!');
  this.itemsel = item;
}

borrarPersonas() {
  console.log(this.itemsel);
  this.crudInquilino.eliminarPersona(this.itemsel.idpersona)
  .map((response) => response.json())
  .subscribe((data) => {
    this.listarPersonas();
  });
}
}




import { Component, Input, OnInit } from '@angular/core';
import { ServiceInquilinoService } from '../../../services/service-inquilino.service';
import 'rxjs/add/operator/map';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-aplic',
  templateUrl: './aplic.component.html',
  styles: []
})

export class AplicComponent implements OnInit {

  @Input() idSubMenu1: any;
  listado;

  constructor(private crudAplic: ServiceInquilinoService, private slim: SlimLoadingBarService )  {}

  ngOnInit() {
    this.listarAplicaciones();
    this.slim.start();
  }

  listarAplicaciones() {
    this.slim.stop();
    this.crudAplic.getListAplic(this.idSubMenu1)
    .map((response) => response.json())
    .subscribe((data) => {
      this.listado = data;
      this.slim.complete();
    });
  }


}

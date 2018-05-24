import { Component, Input, OnInit } from '@angular/core';
import { ServiceInquilinoService } from '../../../services/service-inquilino.service';
import 'rxjs/add/operator/map';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-submenu1',
  templateUrl: './submenu1.component.html',
  styles: []
})
export class Submenu1Component implements OnInit {
  @Input() idMenu: any;
  submenues;

  constructor(private crudSumenu1: ServiceInquilinoService, private slim: SlimLoadingBarService ) { }

  ngOnInit() {
    this.listarAplicaciones();
    this.slim.start();
  }

  listarAplicaciones() {
    this.slim.stop();
    this.crudSumenu1.getListSub1(this.idMenu)
    .map((response) => response.json())
    .subscribe((data) => {
      this.submenues = data;
      this.slim.complete();
    });
  }

}

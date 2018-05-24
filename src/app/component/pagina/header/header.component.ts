import { Component, OnInit } from '@angular/core';
import { ServiceInquilinoService } from '../../../services/service-inquilino.service';
import 'rxjs/add/operator/map';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu;

  constructor(private crudMenu: ServiceInquilinoService, private slim: SlimLoadingBarService ) { }

  ngOnInit() {
    this.listarMenues();
    this.slim.start();
  }

  listarMenues() {
    this.slim.stop();
    this.crudMenu.getListMenu()
    .map((response) => response.json())
    .subscribe((data) => {
      this.menu = data;
      this.slim.complete();
    });
  }

}

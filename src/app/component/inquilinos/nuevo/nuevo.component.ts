import { Component } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import * as jsPDF from 'jspdf';



@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent  {

  item;
  locador;
  direccion;
  telefono;
  localidad;
  dia;
  

  myDatePickerOptions: IMyDpOptions = {
    // other options...
    // dateFormat: 'yyyy-mm-dd',
    dateFormat: 'dd         mm        yyyy',
};

downloadPDF() {

  this.direccion = 'Guido Spano Maria Del Pilar   335';
  this.localidad = 'San Nicolás';
  this.telefono = '44444444444';
 
  const doc = new jsPDF('p','pt','a4');
  doc.addImage('./assets/img/Recibo_X.jpg',2,2,590,820);
  doc.addImage('./assets/img/logo.png',30,8,200,70);
  doc.setFontSize(10);
  doc.text('DOCUMENTO NO VALIDO COMO FACTURA',340 ,17 );
  doc.setFontSize(17);
  doc.text('REMITO',340 ,33);
  doc.setFontSize(12);
  doc.text('FECHA',350 ,99);
  doc.text(this.dia.formatted,407 ,99);
  doc.text( this.locador,100 ,187);
  doc.text( this.telefono,430 ,187);
  doc.text( this.direccion,100 ,217);
  doc.text( this.localidad,430 ,217);
  doc.setFontSize(10);
  doc.text('RESPONSABLE MONOTRIBUTO',100 ,150);
  doc.text('Francia 18 Bis - B2900 - San Nicolás',50 ,100);
  doc.text('0336-4426664 / 0336-4687533',50 ,110);
  doc.text('inmobiliaria@arquiobra.com.ar',50 ,120);
  doc.text('C.U.I.T Nº: XXXXXXXXXX',350 ,130);
  doc.text('Ingresos Brutos: Reg. Simpl.',350 ,140);
  doc.text('Inicio de Actividades: 01/09/2000',350 ,150);
  doc.setFontSize(14);
  doc.text('Señor(es):.............................................................................',27 ,190);
  doc.text('Tel:............................................',390 ,190);
  doc.text('Dirección:.............................................................................',27 ,220);
  doc.text('Loc:............................................',390 ,220);
  doc.setFontSize(11);
  doc.text('FORMA DE PAGO',27 ,290);
  doc.text('COPIA ORIGINAL',12 ,490,90);
  doc.text('EFECTIVO',150 ,290);
  doc.text('TARJETA',220 ,290);
  doc.text('CTA',280 ,290);
  

  doc.save('test.pdf');

}

}




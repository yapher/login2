import { Component, ViewChild, ElementRef } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PDFAnnotationData } from 'pdfjs-dist';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styles: []
})


export class PdfComponent {

  page: number = 1;
  pdfSrc: string = '';

  onFileSelected() {
    let img: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {

      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      }

      reader.readAsArrayBuffer(img.files[0]);
    }
  }

  downloadPDF() {
    const doc = new jsPDF('p','pt','a4');
    doc.addImage('./assets/img/Recibo_X.jpg',2,2,590,820);
    doc.addImage('./assets/img/logo.png',15,8,200,70);
    doc.setFontSize(10);
    doc.text('DOCUMENTO NO VALIDO COMO FACTURA',340 ,17 );
    doc.setFontSize(17);
    doc.text('REMITO',340 ,33);
    doc.setFontSize(12);
    doc.text('FECHA',350 ,99);
    doc.text('30',407 ,99);
    doc.text('05',452 ,99);
    doc.text('2018',493 ,99);
    doc.setFontSize(10);
    doc.text('RESPONSABLE MONOTRIBUTO',100 ,150);
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
    doc.text('EFECTIVO',150 ,290);
    doc.text('TARJETA',220 ,290);
    doc.text('CTA',280 ,290);

    doc.save('test.pdf');
  }
}

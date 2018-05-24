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

  onFileSelected(){
    let img: any = document.querySelector("#file");

    if(typeof (FileReader)!== 'undefined'){

      let reader = new FileReader();

      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }

      reader.readAsArrayBuffer(img.files[0]);
    }
  }

  downloadPDF(){
    const doc = new jsPDF();
    doc.text('este es un texto de prueba',10 ,10 );
    doc.save('test.pdf');
  }
}

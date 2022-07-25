import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  public page = 5;

  public pageLabel: string = '';
  pdfSrc: string = '';

  constructor(private pdfService: NgxExtendedPdfViewerService) {
    
    pdfDefaultOptions.doubleTapZoomFactor = '150%';
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
  }

  ngOnInit(): void {
    let base64String =
    this.pdfSrc = `data:application/pdf;base64,${base64String}`;
  }
}
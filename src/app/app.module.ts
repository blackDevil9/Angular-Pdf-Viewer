import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HomeComponent } from './home/home.component';
import { PdfComponent } from './pdf/pdf.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

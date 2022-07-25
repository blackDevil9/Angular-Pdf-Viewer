import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { HomeComponent } from './home/home.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'pdf', component: PdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { AgTableComponent } from './ag-table/ag-table.component';
import { HomeComponent } from './home/home.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'pdf', component: PdfComponent },
  { path: 'agTable', component: AgTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

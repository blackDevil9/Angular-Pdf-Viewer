import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'pdf', component: PdfComponent },
  { path: 'Table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

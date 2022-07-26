import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.css'],
})
export class AgTableComponent implements OnInit {
  public data = [
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
    { name: 'test', email: 'test@gmail.com', website: 'test.com' },
  ];
  title = 'angulardatatables';
  dtOptions: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      dom: 'Bfrtip',
      buttons: ['copy', 'csv', 'excel', 'print'],
    };
  }
}
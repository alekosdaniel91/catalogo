import { Component, OnInit } from '@angular/core';
import {  User } from '../../models/data';

import {MatTableDataSource} from '@angular/material/table';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 public users: User[] = []
 public displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'Fecha', 'Direccion',"cedulaPdf", "Ciudad"];
 public dataSource = new MatTableDataSource(this.users);
  
  
  constructor( private apiData:ApiDataService) {}

  ngOnInit() {
    this.apiData.getUser().subscribe(r=>this.users=r)
  }
  
applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
}

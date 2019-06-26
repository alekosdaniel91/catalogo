import { Component, OnInit } from '@angular/core';
import {  User } from '../../models/data';

import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 public users: User[] = []
    displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'Fecha', 'Direccion'];
    dataSource = new MatTableDataSource(this.users);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor() {
    this.users.push(JSON.parse(localStorage.getItem("currentUser")));
    console.log(this.users[0])
   }

  ngOnInit() {
  }

}

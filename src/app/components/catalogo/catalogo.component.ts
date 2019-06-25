import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Data } from '../../models/data';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  private products: Data;
  constructor(private apiData: ApiDataService) { 
    this.getData();
  }

  ngOnInit() {}
  getData(){
    this.apiData.getAllData().subscribe(res=>this.products=res)
  }


}

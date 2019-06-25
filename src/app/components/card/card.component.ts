import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Data } from '../../models/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private apiData: ApiDataService) { }
  private products: Data;
  ngOnInit() {
    this.getData();
  }
  getData(){
    this.apiData.getAllData().subscribe(res=>this.products=res)
  }
}

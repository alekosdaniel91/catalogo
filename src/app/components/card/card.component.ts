import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Data } from '../../models/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: Data;
  @Input() catalogo: boolean=true;

  constructor(private apiData: ApiDataService) { }
  
  ngOnInit() {}
  sendProd(product:Data){
    this.apiData.getProductID(product)
  }  
}

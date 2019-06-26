import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { ApiDataService } from '../../services/api-data.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Data;
  constructor(private apiData: ApiDataService) {
    this.getProduct()
   }
  
  ngOnInit() {}

  getProduct() {
    this.product=this.apiData.setProductID()    
  }

 
}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Data } from '../../models/data';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Data;
  constructor(private apiData: ApiDataService) { }
  
  ngOnInit() {
    // this.getP(1);
    this.showProduct()
  }

  getProdut(i){
    this.apiData.getAllData().subscribe(res=>{
      console.log('productos',res[i].cantidadDisponible)
    }
    );
  }

  
  showProduct(){
    console.log('mostrar',this.apiData.produc())
  }
}

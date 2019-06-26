import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { Data } from '../../models/data';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: Data;
  @Input() catalogo: boolean=true;

  constructor(private apiData: ApiDataService, public dialog: MatDialog) { }
  
  ngOnInit() {}
  sendProd(product:Data){
    this.apiData.getProductID(product)
  }  
  openDialog(name:string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      data: {imagen : name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}

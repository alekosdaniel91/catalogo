import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { ApiDataService } from './services/api-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ProductComponent } from './components/product/product.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    ProductComponent,
    CatalogoComponent,
    NavbarComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
    
  ],
  entryComponents: [ModalComponent],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

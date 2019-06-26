import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path:'',component:CatalogoComponent},
  {path:'product',component:ProductComponent},
  {path:'table',component:TableComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

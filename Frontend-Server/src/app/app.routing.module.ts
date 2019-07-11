import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormProductComponent } from './form-product/form-product.component';
 
const appRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list',  component: ProductListComponent},
  { path: 'form-product',  component: FormProductComponent},
  { path: 'detail/:_id',  component: DetailProductComponent}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
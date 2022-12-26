import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardModule } from 'src/app/features/product-card/product-card.module';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductCardModule,
    FormsModule,
  ],
})
export class ProductsModule {}

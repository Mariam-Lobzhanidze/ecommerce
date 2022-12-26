import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Category, Product } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';
import { CategoriesService } from 'src/app/core/services/categories';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categoryId?: number;
  search: string;

  categories$: Observable<Category[]> = this.categoriesService.getAll();

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.categoryId = params['category'];
      this.search = params['search'];
      this.getProducts();
    });
  }

  getProducts() {
    const params = {
      categoryId: this.categoryId || null,
      search: this.search || null,
    };
    this.productsService
      .getProducts(params)
      .pipe()

      .subscribe((res) => {
        this.products = res;
      });
  }

  searchProduct(search: string) {
    if (search.length > 3) {
      this.search = search;
      this.getProducts();
    } else {
      this.search = null;
      this.getProducts();
    }
  }
}

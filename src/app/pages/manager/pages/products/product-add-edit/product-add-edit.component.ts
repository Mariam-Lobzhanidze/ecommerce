import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services';
import { switchMap, of } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css'],
})
export class ProductAddEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    id: new FormControl(null),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  });

  categories$: Observable<Category[]> = this.categoriesService.getAll();
  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: any) => {
          if (params['id']) {
            return this.productsService.getOne(params['id']);
          }
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.form.patchValue({
            ...res,
            categoryId: res.category.id,
          });
        }
      });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.form.value.id) {
      this.productsService
        .update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe((res) => {
          this.form.reset();
          this.router.navigate(['/manager/products']);
        });
    } else {
      this.productsService
        .create(this.form.value)
        .pipe()
        .subscribe((res) => {
          this.form.reset();
          this.router.navigate(['/manager/products']);
        });
    }
  }
}

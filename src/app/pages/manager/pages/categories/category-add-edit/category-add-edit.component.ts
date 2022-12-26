import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories';
@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.css'],
})
export class CategoryAddEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    id: new FormControl(null),
  });

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: any) => {
          if (params['id']) {
            return this.categoriesService.getOne(params['id']);
          }
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.form.patchValue(res);
        }
      });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.form.value.id) {
      this.categoriesService
        .update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe((res) => {
          this.form.reset();
          this.router.navigate(['/manager/categories']);
        });
    } else {
      this.categoriesService
        .create(this.form.value)
        .pipe()
        .subscribe((res) => {
          this.form.reset();
          this.router.navigate(['/manager/categories']);
        });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService
      .getAll()
      .pipe()
      .subscribe((res) => {
        this.categories = res;
      });
  }

  deleteItem(id: number) {
    this.categoryService
      .deleteItem(id)
      .pipe()
      .subscribe((res) => {
        this.getAll();
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}

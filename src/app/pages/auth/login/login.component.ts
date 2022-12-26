import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Subject, tap } from 'rxjs';
import { AuthService, CartService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  sub$ = new Subject();
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.authService
      .login(this.form.value)
      .pipe(
        takeUntil(this.sub$),
        tap((res) => {
          this.cartService.getCarts().subscribe();
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/']);
      });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}

import {
  AfterViewInit,
  Directive,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Directive({
  selector: '[AuthPermissionDirective]',
})
export class AuthPermissionDirective implements AfterViewInit {
  constructor(
    private authService: AuthService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log(this.authService.token);
    if (!this.authService.token) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.template);
    }
  }
}

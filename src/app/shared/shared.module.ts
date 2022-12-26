import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';

import { AuthPermissionDirective } from './directives/auth.permission';

@NgModule({
  declarations: [AuthPermissionDirective],
  imports: [CommonModule, RouterOutlet],
  exports: [AuthPermissionDirective],
})
export class SharedModule {}
